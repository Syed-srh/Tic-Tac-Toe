# Tic-Tac-Toe 

A small browser-based Tic-Tac-Toe game implemented with plain HTML, CSS and JavaScript.

## Features
- 3x3 Tic-Tac-Toe board using buttons
- Two-player local play (X vs 0)
- Light/Dark mode toggle with smooth transition
- Winner modal with "Congratulations the Winner is X" and a "New Game" button
- Draw detection
- Different colors for `X` and `0`
- Reset / New Game functionality

## Files
- `index.html` — page layout and game buttons
- `style.css` — styling, modal, and mode button styles
- `app.js` — game logic (click handling, win/draw detection, UI updates)

## How to run
1. Open `index.html` in your browser (double-click or use Live Server in VS Code).
2. Click any square to play. Players alternate between `0` and `X`.
3. Use the "Mode" button to toggle theme. Use "Reset" or "New Game" to restart.

## Notes for developers
- Game state lives in `app.js`. Key functions:
  - `checkWinner()` — checks winning patterns and shows winner
  - `showDraw()` — shows the draw modal when board is full
  - `resetGame()` — resets board and counters
- To change mark colors, see the box click handler in `app.js` where `box.style.color` is set for each mark.

## Next steps
- Add score tracking across rounds
- Improve accessibility (ARIA labels, keyboard play)


