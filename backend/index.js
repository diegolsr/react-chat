const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const connectedUsers = {};
const messageUsers = [];

const port = 3001;

const io = new Server(server, { cors: {} });

app.get("/", (req, res) => {
  return res.send("OK");
});

io.on("connection", (socket) => {
  // console.log("a user connected", socket.id);

  socket.on("guest.new", (message) => {
    socket.broadcast.emit("guest.show", message);

    connectedUsers[message.name] = message;

    // socket.to(socket.id).emit("guest.old", connectedUsers);
    // socket.to(socket.id).emit("message.old", messageUsers);

    socket.emit("guest.old", connectedUsers);
    socket.emit("message.old", messageUsers);
  });

  socket.on("message.new", (message) => {
    socket.broadcast.emit("message.show", message);

    messageUsers.push(message);
  });
});

server.listen(port, () => {
  console.log(`listening on *:${port}`);
});
