const mongoose = require('mongoose');

const Data = new mongoose.Schema({
  coords: { type: Object },
  weather: { type: String },
  zoom: { type: Number },
});

module.exports = mongoose.model('Data', Data);
