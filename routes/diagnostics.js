const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  console.log(req.body)
  const { tip, topic, username } = req.body
  const diagnosticLog = {
    time: Math.floor(Date.now() / 1000),
    error_id: uuidv4(),
    errors: { tip, topic, username }
  }
  res.json(diagnosticLog)
  // TODO: Logic for appending data to the db/diagnostics.json file
});

module.exports = diagnostics;
