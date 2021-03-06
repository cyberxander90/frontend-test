var db = require('./db');
var express = require('express');
var bodyParser = require('body-parser')
var app = express();

// CORS middleware
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};

app.use(bodyParser.json());

app.use(allowCrossDomain);

app.get('/events', function (req, res) {
  res.json({events: db.findAll()});
});

app.get('/events/featured', function (req, res) {
  res.json({events: db.featured()});
});

app.get('/events/:id', function (req, res) {
  var event = db.finById(req.params.id);
  if(event) {
    res.json({event: event});
  } else {
    res.sendStatus(404);
  }
});

app.post('/events', function (req, res) {
  res.json({event: db.create(req.body.event)});
});

module.exports = app;