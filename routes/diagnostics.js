const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', async (req, res) => {
  const contents = await readFromFile('./db/diagnostics.json')
  const logs = JSON.parse(contents.toString())
  res.json(logs)
  // TODO: Logic for sending all the content of db/diagnostics.json
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  const { tip, topic, username } = req.body
  const diagnosticLog = {
    time: Math.floor(Date.now() / 1000),
    error_id: uuidv4(),
    errors: { tip, topic, username }
  }
  readAndAppend(diagnosticLog, './db/diagnostics.json')
  res.json(diagnosticLog)
});

module.exports = diagnostics;
