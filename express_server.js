const express = require("express");
const app = express();
const PORT = 8080; // default port 8080
require('dotenv').config(); //get env data
const fetch = require("node-fetch");

const weatherUrl = "http://api.openweathermap.org/data/2.5/weather"
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

app.get("/forecast", async (req, res) => {
  // const forecast = () => {
    const location = req.query.q
    const urlToFetch = `${weatherUrl}?q=${location}&appid=${apiKey}`;
    try {
      const response = await fetch(urlToFetch);
      console.log(urlToFetch)
        if(response.ok) {
          const jsonResponse = await response.json();
          // console.log(jsonResponse);
          res.send(jsonResponse);
        }
      }
    catch(error) {
      console.log(error);
      }
    // }
    // console.log("before")
    // forecast();
    // console.log("after")
  });
  
app.listen(PORT, () => { //see if server is listening in terminal
  console.log(`Listening on port ${PORT}!`);
});

