import React, { useState } from 'react';
import websiteLogo from './websiteLogo.png';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from "./components/wrapper";
import Main from "./components/main";

import axios from 'axios';



function App() {
  const [city, setCity] = useState('');
  // const api = axios.create({
  //   baseURL: `http://localhost:8080/forecast?q=`
  // })

  const handleSubmit = async (event) => {
    event.preventDefault();

    const value = city;
    console.log({ value });
    // axios.get(`http://localhost:8080/forecast?q=${value}`)

  }

  const handleChange = (event) => {
    setCity(event.target.value);
  }

  return (
   <Wrapper>
    <div className="App">
      <header className="App-header">
        <img src={websiteLogo} alt="logo"/>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" onChange={handleChange} placeholder="Enter your city"/>
            </Form.Group>
            <Button type="submit">See Weather</Button>
          </Form>
      </header>
    </div>
    <Main/>
  </Wrapper>
  )
}

export default App;
