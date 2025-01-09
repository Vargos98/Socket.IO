const express = require('express'); // Import the Express framework for creating web applications.
const http = require('http'); // Import the HTTP module to create an HTTP server.
const app = express(); // Create an instance of the Express application.

const socketIO = require('socket.io'); // Import the Socket.IO library for real-time, bidirectional communication.

app.set("view engine", "ejs"); // Configure the Express app to use EJS as the template engine.

const server = http.createServer(app); // Create an HTTP server that integrates with the Express app.
const io = socketIO(server); // Attach the Socket.IO server to the HTTP server for handling WebSocket connections.

io.on("connection", (socket) => { // Listen for incoming client connections to the Socket.IO server.
  console.log(socket.id); // Log the unique ID of the connected client socket.
  
  socket.on("disconnect", () => { // Listen for the 'disconnect' event when a client disconnects.
    console.log("Disconnected", socket.id); // Log a message and the ID of the disconnected client.
  });
});

app.get('/', (req, res) => { // Define a route handler for GET requests to the root URL ('/').
  res.render('index'); // Respond by rendering the 'index' view using the EJS template engine.
});

server.listen(3000, () => { // Start the HTTP server and have it listen on port 3000.
  console.log("Server is running on port 3000"); // Log a message confirming the server is running.
});
