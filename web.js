const path = require('path');
const express = require('express');
const app = express();
const wsServer = require('express-ws')(app);
const watchify = require('watchify');

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
//server.use((req, res) => res.sendFile(INDEX))

app.ws('/time', function(ws, req) {
  setInterval(() => {
    ws.send(new Date().toTimeString());
  }, 1000);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
