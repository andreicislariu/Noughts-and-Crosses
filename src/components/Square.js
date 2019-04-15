import React from 'react';
import '../App.css';

const Square = ({className, value, index, markSquare}) => {
  return (
    <main className={className} onClick={() => markSquare(index)} >
      <span className = 'center'>
        {value}
      </span>
    </main>
  );
};

export default Square;
