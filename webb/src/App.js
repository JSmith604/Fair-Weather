import React from 'react';
// import logo from './logo.svg';
import websiteLogo from './websiteLogo.png';
import './App.css';
import { Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from "./components/wrapper";

function App() {
  return (
   <Wrapper>
    <div className="App">
      <header className="App-header">
        <img src={websiteLogo} alt="logo" />
        <Alert variant="primary">Check out the forecast for your city</Alert>
        <Button>See Weather</Button>
      </header>
    </div>
  </Wrapper>
  )
}

export default App;
