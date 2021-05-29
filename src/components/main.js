import React, { useState } from "react";
import axios from 'axios';
import { Button, Form, Col } from 'react-bootstrap';
import WeatherResult from "./WeatherResult";

const Main = () => { //Main component handles state changes and events
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();

  const handleSubmit = async (event) => { //Handles axios calls to the backend api
    event.preventDefault();
    const weatherResult = await axios.get(`https://fair-weather-api-syrgy.ondigitalocean.app/forecast?q=${city}`);
    setWeather(weatherResult.data.weather[0])
    setTemp(weatherResult.data.main.temp)
  }
  const handleChange = (event) => { //Gets value from user input
    setCity(event.target.value);
  }
  return ( //Returns forecast if the api call is successful 
    <div className="App-main">
        {weather && <WeatherResult weather={weather} temp={temp} />} 
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Col md={{ span: 4, offset: 4 }}>
              <Form.Control
                type="text"
                name="city"
                onChange={handleChange}
                placeholder="Enter your city"
              />
            </Col>
          </Form.Group>
          <Button type="submit">See Weather</Button>
        </Form>
    </div>
  )
}

export default Main;