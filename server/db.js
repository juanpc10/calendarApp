const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/event_db', {
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;