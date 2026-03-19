# Tic Tac Toe Game

A simple and interactive Tic Tac Toe web application built using HTML, CSS, and JavaScript. This project demonstrates core concepts of frontend development and basic game logic implementation.

---

## Features

* 2-player game (X and O)
* Interactive 3×3 grid
* Automatic winner detection
* Draw detection
* Restart game functionality
* Clean and responsive UI

---

## Technologies Used

* HTML – Structure of the game
* CSS – Styling and layout (Grid + Flexbox)
* JavaScript – Game logic and interactivity

---

## Project Structure

```id="k76sy1"
tic-tac-toe/
│
├── index.html     # Main structure
├── style.css      # Styling
├── script.js      # Game logic
└── README.md
```

---

## How It Works

### HTML

* Creates a 3×3 grid using `<div>` elements
* Each cell has a `data-index` to identify its position
* Includes a status display and restart button

---

### CSS

* Uses CSS Grid to create the board layout
* Uses Flexbox to center content inside each cell
* Adds hover effects for better user experience

---

### JavaScript

#### Game State

* Uses an array to store the current board:

  ```
  ["", "", "", "", "", "", "", "", ""]
  ```
* Tracks current player (X or O)

---

#### Event Handling

* Adds click event listeners to each cell
* Updates the board and UI when a cell is clicked

---

#### Win Logic

* Uses predefined winning patterns:

  ```
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
  ```
* Checks if any pattern matches the current player

---

#### Player Switching

* Alternates between X and O after each move

---

#### Restart Function

* Clears the board
* Resets player and game state

---

## Key Concepts Used

* DOM Manipulation
* Event Listeners
* Arrays and Conditions
* CSS Grid and Flexbox
* Basic Game Logic

---

## Deployment

This project is deployed using GitHub Pages.

Live Link:

```id="lto857"
https://your-username.github.io/tic-tac-toe/
```

---

## Future Improvements

* Add AI opponent (single-player mode)
* Add scoreboard
* Improve UI/UX with animations
* Make fully mobile responsive

---

## Learning Outcome

This project helped in understanding:

* How to connect UI with logic
* Handling user interactions
* Implementing real-time game logic in JavaScript

---

## Author

Palak
