const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const UserModel = require('../models/UserModel');

//show all user data
router.get('/', (req, res) => {
  UserModel.find(function (err, documents) {
    if (err) {
      res.send('Something went wrong.');
    }
    if (documents.length == 0) {
      res.send('No users');
    } else {
      res.send(documents);
    }
  });
});

//create user
router.post('/new-user', (req, res) => {
  const newUser = new UserModel({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
  });

  newUser.save((err) => {
    if (err) {
      res.send('Error encountered saving user.');
    } else {
      res.send('New user registered successfully.');
    }
  });
});

//login
router.post('/login', async (req, res) => {
  const user = UserModel.find(
    {
      username: req.body.username,
      password: req.body.password,
    },
    function (err, documents) {
      if (err) {
        res.send('Something went wrong.');
      } else {
        if (documents.length == 0) {
          res.send('Login failed.');
        } else {
          const token = jwt.sign({
            username: UserModel.username,
          });
          res.send(documents);
          username = req.body.username;
        }
      }
    }
  );
});

//show user
router.get('/:id', (req, res) => {
  UserModel.findById(req.params.id, function (err, documents) {
    if (err) {
      res.send('Something went wrong.');
    } else {
      res.send(documents);
    }
  });
});

//edit user
router.post('/:id/edit', (req, res) => {
  UserModel.findbyIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
      },
    },
    function (err) {
      if (err) {
        res.send('Updating user failed.');
      } else {
        res.send('User updated successfully.');
      }
    }
  );
});

//delete health
router.delete('/:id', (req, res) => {
  UserModel.findByIdAndDelete(req.params.id, function (err) {
    if (err) {
      res.send('Deleting user failed.');
    } else {
      res.send('User deleted successfully.');
    }
  });
});

module.exports = router;
