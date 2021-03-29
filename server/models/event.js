const mongoose = require('../db');

const Schema = mongoose.Schema;

const EventSchema = new Schema ({
  title: {type: String, required: true},
  venue: {type: String, required: true},
  date: {type: String, default: String(Date.now())},
});

module.exports = mongoose.model('Events', EventSchema);
