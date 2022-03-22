const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const port = 3001;

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});