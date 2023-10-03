import React, { useContext } from "react";

import { BoardCell } from "./BoardCell";
import { checkGuess } from "../../game-helpers";

import { answer } from "../Game/Game";


export function BoardRow({ collumns, guess = null }) {

  let cellArray
  let id

  if (guess) {
    cellArray = guess
  }
  else {
    cellArray = Array(collumns).fill(undefined)
  }

  return (
    <div className="guess">
      {cellArray.map((value, index) => {
        return (
          <BoardCell key={`${id}-${index}`} value={value && value.letter} status={value && value.status} />
        )
      })}
    </div>
  )
}
