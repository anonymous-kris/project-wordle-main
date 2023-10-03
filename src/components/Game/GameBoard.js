import React, { useState } from "react";

import * as constants from "../../constants.js"
import Board from "../Board/Board.js";

export function GameBoard({ guesses }) {

  console.log(guesses)


  return (
    <div className="guess-results">
      <Board rows={constants.NUM_OF_GUESSES_ALLOWED} collumns={5} guesses={guesses} />
    </div>
  )
}
