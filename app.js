const express = require('express');
const http = require('http');
const app = express();

const socketIO = require('socket.io');

app.set("view engine", "ejs");

const server = http.createServer(app);
const io = socketIO(server);

// io.on("connection", (socket)=>{
//   socket.on("abcd",()=>{
//     io.emit("defg")
//   })

// })

io.on("connection", (socket)=>{
  socket.on("typing",()=>{
    socket.broadcast.emit("typing")
  })

})

// io.emit() : method is used to send data to everyone in the socket/peoples.
//socket.emit() : method is used to send data to a single socket/person

app.get('/', (req, res) => {
  res.render('index');
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
