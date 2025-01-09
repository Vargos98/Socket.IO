const express = require('express'); // Import the Express framework for creating web applications.
const http = require('http'); // Import the HTTP module to create a server.
const app = express(); // Create an Express application instance.

const socketIO = require('socket.io'); // Import the Socket.IO library for real-time communication.

app.set("view engine", "ejs"); // Set EJS as the template engine for rendering views.

const server = http.createServer(app); // Create an HTTP server using the Express app.
const io = socketIO(server); // Attach the Socket.IO server to the HTTP server.

io.on("connection", () => { // Listen for a new client connection event in Socket.IO.
  console.log("connected"); // Log a message when a client successfully connects.
});

app.get('/', (req, res) => { // Define a route handler for GET requests to the root URL ('/').
  res.render('index'); // Render the 'index' view using the EJS template engine.
});

server.listen(3000, () => { // Start the server on port 3000 and listen for incoming connections.
  console.log("Server is running on port 3000"); // Log a message indicating the server is running.
});
