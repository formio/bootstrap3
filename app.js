'use strict';

require('dotenv').load({silent: true});
var config = require('./config')();
var express = require('express');
var _ = require('lodash');
var app = express();

// Host the dynamic app configuration.
app.get('/app/config.js', function(req, res) {
  require('fs').readFile(__dirname + '/dist/app/config.js', 'utf8', function(err, data) {
    if (err) {
      res.send(404);
    }
    else {
      res.set('Content-Type', 'text/javascript');
      res.send(data.replace('var serverHost = host;', 'var serverHost = \'localhost:3000\';'));
    }
  });
});

// Add the formio Project.
app.use('/', express.static(__dirname + '/dist'));

console.log(' > Listening on port ' + config.port);
app.listen(config.port);
