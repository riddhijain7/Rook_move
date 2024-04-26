const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();

const server = http.createServer(app);

app.use(express.static(__dirname + '/public'));


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 







// const io = socketIo(server);

// // Serve the game client

// // Game state
// let gameState = {
//     currentPlayer: null,
//     boardSize: 8,
//     rookPosition: { x: 7, y: 7 } // Initial position of the rook (top-right corner)
// };

// // Timer settings
// const TURN_TIME_LIMIT = 30 * 1000; // 30 seconds in milliseconds

// // Function to switch the current player
// function switchPlayer() {
//     gameState.currentPlayer = gameState.currentPlayer === 'player1' ? 'player2' : 'player1';
// }

// // Function to handle player moves
// function handlePlayerMove(socket, move) {
//     // Check if it's the player's turn
//     if (socket.id !== gameState.currentPlayer) {
//         socket.emit('message', 'It is not your turn.');
//         return;
//     }

//     // Update rook position based on the move
//     if (move === 'left') {
//         gameState.rookPosition.x--;
//     } else if (move === 'down') {
//         gameState.rookPosition.y++;
//     }

//     // Check win condition
//     if (gameState.rookPosition.x === 0 && gameState.rookPosition.y === gameState.boardSize - 1) {
//         io.emit('gameOver', { winner: socket.id });
//         return;
//     }

//     // Switch to the next player
//     switchPlayer();
//     io.emit('updateGameState', gameState);
// }

// // Handle WebSocket connections
// io.on('connection', (socket) => {
//     console.log('A user connected:', socket.id);

//     // Assign player roles
//     if (!gameState.currentPlayer) {
//         gameState.currentPlayer = 'player1';
//     } else {
//         gameState.currentPlayer = 'player2';
//     }

//     // Send initial game state to the connected player
//     socket.emit('initGameState', gameState);

//     // Listen for player moves
//     socket.on('move', (move) => {
//         handlePlayerMove(socket, move);
//     });

//     // Handle disconnection
//     socket.on('disconnect', () => {
//         console.log('User disconnected:', socket.id);
//         // Reset game state if a player disconnects
//         gameState = {
//             currentPlayer: null,
//             boardSize: 8,
//             rookPosition: { x: 7, y: 0 }
//         };
//     });
// });

// Start the server
