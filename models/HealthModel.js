const mongoose = require('mongoose');

//initializing User model
const healthSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
    },
    height: {
      type: Number,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Health', healthSchema);
