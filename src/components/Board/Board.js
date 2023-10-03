import React from 'react';
import { BoardRow } from './BoardRow';


function Board({ rows, collumns, guesses = [] }) {

  const rowsArray = Array(rows).fill(undefined)

  rowsArray.splice(0, guesses.length, ...guesses)


  return (
    <div>
      {rowsArray.map((guess, index) => {
        return (<BoardRow key={index} collumns={collumns} guess={guess} />)
      })}
    </div>
  );
}

export default Board;
