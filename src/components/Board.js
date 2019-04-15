import React from 'react';
import Square from './Square';
import '../App.css'
import PT from 'prop-types'

const Board = ({ boardState, markSquare }) => {
  const boardSquares = boardState.map((value, i) => 
    <Square className={`square row${Math.floor(i / 3) + 1} col${i % 3 + 1}`} value={boardState[i]} index={i} markSquare={markSquare} />
    //`square row${Math.floor(i / 3) + 1} col${i % 3 + 1}`
  )
  console.log(boardSquares)
  return (
    <main className="gridContainer">
      {boardSquares}
    </main>
  );
};

Board.propTypes = {
  boardState: PT.array.isRequired
}

export default Board;
