const mongoose = require('mongoose');

const Data = new mongoose.Schema({
  point: { type: Object },
  weather: { type: String },
});

module.exports =  mongoose.model('Data', Data);
