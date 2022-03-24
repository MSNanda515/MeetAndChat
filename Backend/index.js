const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());

const users = [];

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
    }
});

const addUser = (userName, roomId) => {
    user.push({
        userName,
        roomId
    })
}

const getRoomUsers = (roomId) => {
    return users.filter((user) => {
        return user.roomId === roomId;
    })
}

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
        socket.join(roomId);
        socket.to(roomId).emit("user-connected", userName);
        addUser(userName, roomId)

        io.emit(roomId).emit("all-users", getRoomUsers(roomId));

        socket.on("disconnect", () => {
            console.log("disconnected");
            socket.leave(roomId);

            io.to(roomId).emit("all-users", getRoomUsers(roomId))
        })
    })
});

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});