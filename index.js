const express = require('express');
const path = require('path');
const router = express.Router();
const mongoose = require('mongoose');
const model = require('./models');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 8080;

mongoose.connect('mongodb://gabrielgene:gene12345@ds161146.mlab.com:61146/anteater', function (err, res) {
  if (err) throw err;
  console.log('Connected to MongoDB');
});

const app = express();

app.use(bodyParser.json());

app.all('/*', cors(), function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "POST, GET, PATCH, OPTIONS, PUT, DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Credentials", "true");
	if (req.method == 'OPTIONS') {
		res.status(200).end();
	} else {
		next();
	}
});

app.post('/', function (req, res) {
  const { body } = req;

  const data = {
    ...body,
  };

  model.create(data, function (err, data) {
    if (err) {
      console.log(err)
      res.status(500).send(err)
    }
    res.status(200).json(data);
  });
});

app.get('/', function (req, res) {

  model.find({}, function (err, data) {
    if (err) {
      console.log(err)
      res.status(500).send(err)
    }
    res.status(200).json(data);
  })
});

const server = app.listen(PORT, function () {
  console.log('service RESTful API serer started on: ' + PORT);
});
