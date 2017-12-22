const express = require('express');
const path = require('path');
const router = express.Router();
const mongoose = require('mongoose');
const model = require('./models');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

mongoose.connect('mongodb://gabrielgene:gene12345@ds161146.mlab.com:61146/anteater', function (err, res) {
  if (err) throw err;
  console.log('Connected to MongoDB');
});

const app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
  const data = {
    cords: '123',
    weather: 'chuva'
  }

  model.create(data, function (err, data) {
    if (err) {
      console.log(err)
      res.status(500).send(err)
    }
    res.status(200).json(data);
  });
});

app.get('/data', function (req, res) {

  model.find({}, function (err, data) {
    if (err) {
      console.log(err)
      res.status(500).send(err)
    }
    res.status(200).json(data);
  })
});

// const indexHtmlPath = path.join(__dirname, './public/');
// app.get('*', (req, res) => res.sendFile(indexHtmlPath));

const server = app.listen(PORT, function () {
  console.log('service RESTful API serer started on: ' + PORT);
});
