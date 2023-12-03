# Covid Fighter Game

## Introduction

Covid Fighter is a simple browser-based game where you, as a superhero, fight against viruses to protect the world. The game features enemies that move in a predefined pattern, a player-controlled superhero, and a gem to be collected for victory.

## Getting Started

To run the game, simply open the `index.html` file in a web browser. The game canvas will be displayed, allowing you to start playing immediately.

```bash
$ open index.html
```
## Gameplay

### Player Movement

- Click and hold the mouse on the canvas to move the superhero to the right.
- Release the mouse click to stop the superhero.

### Objective

- Avoid collisions with viruses (enemies) to maintain your health.
- Collect the gem for a victory.

## Files

### `index.html`

The main HTML file that sets up the game canvas and includes the necessary styles and scripts.

### `script.js`

Contains the game logic, including player and enemy definitions, collision detection, and game loop.

### `Images` Folder

Contains images used in the game, including the superhero, viruses, and gem.

## Game Elements

### Superhero (Player)

- Represented by the superhero image.
- Controlled by mouse clicks.
- Health displayed on the top left corner.

### Viruses (Enemies)

- Three enemies with varying speeds and starting positions.
- Colliding with enemies reduces player health.

### Gem

- Victory condition.
- Collect the gem to win the game.
## Events

### Mouse Press

- Initiates superhero movement.

### Mouse Release

- Stops superhero movement.

## Functions

### `load_images()`

Loads images for the player, viruses, and gem.

### `init()`

Initializes game variables, canvas, and event listeners.

### `isOverlap(rect1, rect2)`

Checks if two rectangles overlap.

### `draw()`

Clears the canvas and draws player, enemies, gem, and score.

### `update()`

Updates game logic, handles player movement, collision detection, and enemy movements.

### `gameloop()`

Main game loop calling draw and update functions.

## Conclusion

Covid Fighter is a fun and simple game that challenges players to navigate through viruses to collect the victory gem. Have fun playing and stay healthy!

Feel free to contribute, report issues, or suggest improvements. Happy gaming!
