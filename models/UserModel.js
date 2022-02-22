const mongoose = require('mongoose');

//initializing User model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
  },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
