const express = require("express");
const app = express();
const PORT = 8080; // default port 8080
require('dotenv').config; //get env data

const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=London,uk"
apiKey = process.env.API_KEY

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/weather", (req, res) => {
  res.status(200).send({
    weather: 'sunny',
    city: 'Vancouver'
  })
});

app.get("/forecast", (req, res) => {
  const forecast = async () => {
    const urlToFetch = `${weatherUrl}&appid=${apiKey}`;
    try {
      const response = await fetch(urlToFetch);
        if(response.ok) {
          const jsonResponse = await response.json();
          console.log(jsonResponse);
          return jsonResponse;
        }
      }
    catch(error) {
      console.log(error);
      }
    }
    console.log(forecast)
  });
  
app.listen(PORT, () => { //see if server is listening in terminal
  console.log(`Listening on port ${PORT}!`);
});

