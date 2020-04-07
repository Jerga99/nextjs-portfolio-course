
const mongoose = require('mongoose');
const config = require('../config/dev');
const fakeDb = require('./FakeDb');


mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log('Populating DB........');
  console.log('Connected to DB');
})

