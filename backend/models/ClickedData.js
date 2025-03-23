const mongoose = require('mongoose');

const clickedDataSchema = new mongoose.Schema({
  market: String,
  no: Number,
  yes: Number,
  noSub: Number,
  yesSub: Number,
});

const ClickedData = mongoose.model('ClickedData', clickedDataSchema);

module.exports = ClickedData;
