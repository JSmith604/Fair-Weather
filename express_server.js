const express = require("express");
const app = express();
const PORT = 8080; // default port 8080


app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/weather", (req, res) => {
  res.status(200).send({
    weather: 'sunny',
    city: 'Vancouver'
  })
});

app.listen(PORT, () => { //see if server is listening in terminal
  console.log(`Listening on port ${PORT}!`);
});