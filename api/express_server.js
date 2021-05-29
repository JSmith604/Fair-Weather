const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080; // default port 8080
require('dotenv').config(); //get env data
const fetch = require("node-fetch");

const weatherUrl = "http://api.openweathermap.org/data/2.5/weather"
apiKey = process.env.API_KEY

app.use(cors()) //testing 
app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/weather", (req, res) => { //test with hard coded data
  res.status(200).send({
    weather: 'sunny',
    city: 'Vancouver'
  })
});

// To test api type http://localhost:8080/forecast?q=Vancouver,canada (insert city and country of your choice to see weather for difference places, also works if you type the city with no country)
app.get("/forecast", async (req, res) => {
  const location = req.query.q
  const urlToFetch = `${weatherUrl}?q=${location}&units=metric&appid=${apiKey}`;
    try {
    const response = await fetch(urlToFetch);
      if(response.ok) {
        const jsonResponse = await response.json();
        res.send(jsonResponse);
      }
    }
  catch(error) {
    console.log(error);
  }
});

app.listen(PORT, () => { //see if server is listening in terminal
  console.log(`Listening on port ${PORT}!`);
});
