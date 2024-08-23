const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Initialize the Express app
const app = express();

// Create an HTTP server and integrate with Express
const server = http.createServer(app);

// Initialize Socket.IO and bind it to the HTTP server
const io = socketIo(server);

// Handle Socket.IO connections
io.on('connection', (socket) => {
    console.log('a user connected');

    // Handle incoming messages
    socket.on('message', (msg) => {
        console.log('message: ' + msg);
        io.emit('message', msg); // Broadcast message to all clients
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
