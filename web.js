require('dotenv').config();
const path = require('path');
const express = require('express');
const server = express();
const wsServer = require('express-ws')(server);
const watchify = require('watchify');

const App = require('./app');
var app = new App('web', 'worker');

const PORT = process.env.PORT || 3000;
server.use(express.static('public'));
//server.use((req, res) => res.sendFile(INDEX))

server.ws('/time', (ws, req) => {
  ws.on('message', data => {
    app.sendData(data).then(response => {
      ws.send(response);
    });
  });
});

server.listen(PORT, () => console.log(`Listening on ${PORT}`));
