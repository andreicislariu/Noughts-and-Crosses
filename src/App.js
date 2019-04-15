import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <main className="App">
        <div>My App</div>
        <Board />
      </main>
    );
  }
}

export default App;
