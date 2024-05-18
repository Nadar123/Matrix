const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require('axios');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//create a server object:
app.get("/free-apps", function (req, res) {
  axios.get(process.env.FREE_APPS_URL).then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.send("Error occurred while fetching data");
    });
});

app.get("/paid-apps", function (req, res) {
  axios.get(process.env.PAID_APPS_URL).then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.send("Error occurred while fetching data");
    });
});

app.post("/", function (req, res) {
  console.log(req.body);
  res.send("received");
});

app.listen(8080, function () {
  console.log("server running on 8080");
}); //the server object listens on port 8080

// STATUS: this works when sending GET or POST request

module.exports = app;