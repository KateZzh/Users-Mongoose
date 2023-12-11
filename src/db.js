const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/university');

const TableUser = mongoose.model('user', {
  name: String,
  surName: String,
  email: String,
  password: String,
  age: Number,
});

const ObjectId = mongoose.Types.ObjectId;

module.exports = { TableUser, ObjectId };
