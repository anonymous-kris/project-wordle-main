import React, { useState } from 'react';

export function GuessInput({ handleSubmit, gameOver }) {
  const [guessInput, setGuessInput] = useState('')



  return (
    <div className="guess-input-wrapper">
      <form
        onSubmit={e => {
          handleSubmit(e, guessInput)
          setGuessInput('')
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          id="guess-input"
          type="text"
          value={guessInput}
          onChange={(e) => {
            setGuessInput(e.target.value.toUpperCase())
          }}
          pattern='[A-Za-z]{5}'
          title='5 letter word'
          maxLength={5}
          disabled={gameOver}
        />
      </form>
    </div>
  )
}