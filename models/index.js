const mongoose = require('mongoose');

const Data = new mongoose.Schema({
  cords: { type: String },
  clime: { type: String },
});

module.exports =  mongoose.model('Data', Data);
