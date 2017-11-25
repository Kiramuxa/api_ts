const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const port = 80;
require('./routes')(app, {});

app.listen(port, function() {
  console.log('Server listening ' + port + ' port');
});

