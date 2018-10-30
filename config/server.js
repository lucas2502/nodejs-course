var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

consign()
.include('app/routes')
.then('app/models')
.then('config/dbConnection.js')
.into(app);//execute require all routes to app.js

module.exports = app;