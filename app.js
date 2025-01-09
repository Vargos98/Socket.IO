const express = require('express');
const http = require('http');
const app = express();

const socketIO = require('socket.io');

app.set("view engine", "ejs");

const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket)=>{
  socket.on("abcd",(data)=>{
    console.log("hey",data)
  })
})

app.get('/', (req, res) => {
  res.render('index');
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
