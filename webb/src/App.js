import React from 'react';
// import logo from './logo.svg';
import websiteLogo from './websiteLogo.png';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from "./components/wrapper";
import Main from "./components/wrapper";

function App() {
  return (
   <Wrapper>
    <div className="App">
      <header className="App-header">
        <img src={websiteLogo} alt="logo"/>
          <Form>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Enter your city"/>
            </Form.Group>
          </Form>
        <Button>See Weather</Button>
      </header>
    </div>
    <Main/>
  </Wrapper>
  )
}

export default App;
