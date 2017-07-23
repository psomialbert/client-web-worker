require('dotenv').config();
var App = require('./app');

var app = new App('worker', 'web');
app.startListening();
