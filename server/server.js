const http = require('http');
const express = require('express');
const app = express();
const port = 3001;

const  server = http.createServer(app);


app.use(express.static('public'));

server.listen(port, () => {
    console.log("Listening on port-" + port);
});
