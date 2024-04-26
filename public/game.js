// game.js

// Define handleMove function before using it
function handleMove(source, target) {
    let move = game.move({from: source, to: target});

    if(move == null) return 'snapback';
}


const gameState = {
    rookPosition: { x: 7, y: 0 } 
};

const tileSize = 64; 


// Initialize Phaser game
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'gameContainer',
    draggable: true,
    position: 'start',
    onDrop: handleMove, // Pass handleMove function here
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    // Preload assets like images, spritesheets, etc.
    this.load.image('chessboard', 'assets/board.png');
    this.load.image('rook', 'assets/rook1.jpg');
}

function create() {
    // Create game objects, set up game state, etc.

    // Define the size of the rook sprite (adjust as needed)
    const rookSize = 64; // Set the desired size of the rook (e.g., 64x64 pixels)

    // Calculate the position of the rook at the top-right corner of the chessboard
    const boardWidth = 8 * tileSize; // Total width of the chessboard
    const boardHeight = 8 * tileSize; // Total height of the chessboard
    const rookX = boardWidth - tileSize / 2; // Adjusted to the center of the square
    const rookY = tileSize / 2; // Adjusted to the center of the square

    // Create the chessboard sprite
    this.chessboard = this.add.sprite(0, 0, 'chessboard');
    this.chessboard.setOrigin(0, 0); // Set origin to top-left corner

    // Create the rook sprite
    this.rook = this.add.sprite(rookX, rookY, 'rook');

    // Scale the rook sprite to the desired size
    this.rook.setScale(rookSize / this.rook.width, rookSize / this.rook.height);
}




function update() {
    // Update game logic, handle player input, etc.
}
