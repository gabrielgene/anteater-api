const mongoose = require('mongoose');

const Data = new mongoose.Schema({
  coords: { type: Object },
  weather: { type: String },
  zoom: { type: Number },
  createdAt: { type: Date, default: Date.now },
  author: { type: String },
});

module.exports = mongoose.model('Data', Data);
