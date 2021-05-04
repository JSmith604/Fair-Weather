import React, { useState } from "react";
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';


import WeatherResult from "./WeatherResult";

const Main = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const weatherResult = await axios.get(`http://localhost:8080/forecast?q=${city}`);

    setWeather(weatherResult.data.weather[0])
    setTemp(weatherResult.data.main.temp)
  }

  const handleChange = (event) => {
    setCity(event.target.value);
  }

  return (
    <div className="App-main">
        {weather && <WeatherResult weather={weather} temp={temp} />}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="city"
              onChange={handleChange}
              placeholder="Enter your city"
            />
          </Form.Group>
          <Button type="submit">See Weather</Button>
        </Form>
    </div>
  )
}

export default Main;