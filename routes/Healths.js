//installing express package and modules
const express = require('express');
const router = express.Router();
let HealthModel = require('../models/HealthModel');

//show all health data
router.get('/', (req, res) => {
  HealthModel.find(function (err, documents) {
    if (err) {
      res.send('Something went wrong.');
    } else {
      if (documents.length == 0) {
        res.send('No health data.');
      } else {
        res.send(documents);
      }
    }
  });
});

//create health
router.post('/add', (req, res) => {
  let newHealth = new HealthModel({
    username: req.body.username,
    height: Number(req.body.height),
    weight: Number(req.body.weight),
    date: Date(req.body.date),
  });

  newHealth.save((err) => {
    if (err) {
      res.send('Something went wrong.');
    } else {
      res.send('New health data added.');
    }
  });
});

//show one health datapoint
router.get('/:id', (req, res) => {
  HealthModel.findById(req.params.id, function (err, documents) {
    if (err) {
      res.send('Something went wrong.');
    } else {
      res.send(documents);
    }
  });
});

//edit health data
router.post('/:id/edit', (req, res) => {
  HealthModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        weight: req.body.weight,
        height: req.body.height,
        date: req.body.date,
      },
    },
    function (err) {
      if (err) {
        res.send('Updating health data failed.');
      } else {
        res.send('Health data updated successfully.');
      }
    }
  );
});

//delete health data
router.delete('/:id', (req, res) => {
  HealthModel.findByIdAndDelete(req.params.id, function (err) {
    if (err) {
      res.send('Deleting health data failed.');
    } else {
      res.send('Health data deleted successfully.');
    }
  });
});

module.exports = router;
