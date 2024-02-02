const http = require('http');
const express = require('express');
const app = express();

const port = 3001;

const  server = http.createServer(app);
const io = require('socket.io')(server)

io.addListener('connection', (socket)=>{
  console.log("New connection");
  socket.addListener('new message',(msg) => {
    io.emit('new message', msg);
  });
});


app.use(express.static('public'));

server.listen(port, () => {
  console.log("Listening on port-" + port);
});
