import React from 'react';


const WeatherResult = (props) => {

  return (
    <div className="App-weather">
      <h1>{props.weather.main}</h1>
      <p>{props.weather.description}</p>
      <p>{Math.ceil(props.temp)}°C</p>
    </div>
  )
}

export default WeatherResult;
