const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
    }
});

const port = 3001;

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

io.on("connection", socket => {
    console.log("Someone Connected");
    socket.on("join-room", ({roomId, userName})=> {
        console.log("User Joined room");
        console.log(roomId);
        console.log(userName);
    })
});

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});