const express = require('express');
const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

// wss.on('connection', function connection(ws) {
//   ws.on('message', function incoming(message) {
//     console.log('received: %s', message);
//   });

//   ws.send('Hello from server!');
// });

// app.use(express.static('public'));

// server.listen(8080, function listening() {
//   console.log('Listening on %d', server.address().port);
// });
wss.on('connection', (ws) => {
  const sendNumber = setInterval(() => {
    const number = Math.floor(Math.random() * 100);
    ws.send(JSON.stringify({ number }));
  }, 1000);

  ws.on('close', () => {
    clearInterval(sendNumber);
  });
});