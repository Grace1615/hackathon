const express = require('express');
const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('Hello from server!');
});

app.use(express.static('public'));

server.listen(3001, function listening() {
  console.log('Listening on %d', server.address().port);
});
