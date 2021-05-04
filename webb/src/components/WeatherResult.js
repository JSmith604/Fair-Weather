import React from 'react';


const WeatherResult = (props) => { //The weather forecast that the user sees after api call with temperature rounded up to the next whole number 

  return (
    <div className="App-weather">
      <h1>{props.weather.main}</h1>
      <p>{props.weather.description}</p>
      <h1>{Math.ceil(props.temp)}°C</h1>
    </div>
  )
}

export default WeatherResult;
