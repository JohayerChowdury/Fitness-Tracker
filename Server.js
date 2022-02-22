//installing express package
const express = require('express');
let app = express();

//installing body-parser package
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//installing mongoose package
const mongoose = require('mongoose');

//env file for security
require('dotenv').config();

//connecting to mongoose database
mongoose.connect(
  process.env.DB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Mongo DB Connection is Successful');
    }
  }
);

//accessing user route
const user_route = require('./routes/Users');
app.use('/api/user', user_route);

//accessing health route
const health_route = require('./routes/Healths');
app.use('/api/health', health_route);

app.get('/', (req, res) => {
  res.send('This is backend homepage.');
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
