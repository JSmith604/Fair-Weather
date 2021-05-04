import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import websiteLogo from './websiteLogo.png';
import Wrapper from "./components/wrapper";
import Main from "./components/main";

function App() {  //Top level container and logo
  return (
   <Wrapper>
     <header className="App-header">
        <img src={websiteLogo} alt="logo"/>
     </header>
    <Main/>
  </Wrapper>
  )
}

export default App;
