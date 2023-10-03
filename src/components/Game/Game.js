import React, { useState, createContext } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import { GuessInput } from './GuessInput';
import { GameBoard } from './GameBoard';
import Banner from '../Banner/Banner';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([])
  const [gameOver, setGameOver] = useState(false)

  function checkForGameEnd(guessResult, guesses) {
    const statusArray = guessResult.map(letterOutcome => letterOutcome.status)
    const gameWin = statusArray.every(value => value === 'correct')
    if (gameWin) {
      setGameOver("win")
      return
    }
    else if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameOver("loose")
    }
  }

  function handleSubmit(e, guessInput) {
    e.preventDefault()
    console.log(guessInput)
    const guessResult = checkGuess(guessInput, answer)

    const nextGuesses = [...guesses, guessResult]

    setGuesses(nextGuesses)

    // Check for winning condition
    checkForGameEnd(guessResult, nextGuesses)


  }

  return (
    <div className='game-wrapper'>
      <GameBoard guesses={guesses} />
      <GuessInput handleSubmit={handleSubmit} gameOver={gameOver} />
      {gameOver && <Banner won={gameOver} answer={answer} guesses={guesses} />}
    </div>);
}

export default Game;
