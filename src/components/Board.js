import React from 'react';
import Square from './Square';

const Board = () => {
  return (
    <main className="gridContainer">
      <div>
        <p>Board</p>
        <Square />
      </div>
    </main>
  );
};

export default Board;
