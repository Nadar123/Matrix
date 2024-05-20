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


app.listen(8080, function () {
  console.log("server running on 8080");
}); //the server listen on port 8080


module.exports = app;