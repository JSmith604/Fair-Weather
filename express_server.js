const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

// const main = require ("./app");

//open weather info
const weatherUrl = "api.openweathermap.org/data/2.5/weather"
const apiKey = "25c1e17a0931a9996eba6c80c3674b88"

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello!");
});


app.get("/weather", (req, res) => {
  res.status(200).send({
    weather: 'sunny',
    city: 'Vancouver'
  })
});

app.get("/url", (req, res) => {
  res.send("Hello!");
});


app.listen(PORT, () => { //see if server is listening in terminal
  console.log(`Listening on port ${PORT}!`);
});