import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';

const winRows = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

class App extends Component {
  state = {
    board: Array(9).fill(''),
    player: 'O',
    winner: ''
  };
  render() {
    return (
      <main className="App">
        <div>My App</div>
        <Board boardState={this.state.board} markSquare={this.markSquare} />
      </main>
    );
  }

  markSquare = index => {
    if (
      !['X', 'O'].includes(this.state.board[index]) &&
      this.state.winner === ''
    ) {
      const newState = JSON.parse(JSON.stringify(this.state));
      newState.board[index] = this.state.player;
      newState.player = this.state.player === 'X' ? 'O' : 'X';

      winRows.forEach(winArr => {
        let checkRow = newState.board.filter((val, i) => winArr.includes(i));
        if (checkRow.every(val => val === this.state.player)) {
          newState.winner = this.state.player;
        }
      });

      this.setState(newState);
    }
  };
}

export default App;
