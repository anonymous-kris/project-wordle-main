import React from 'react';

function Banner({ won, answer, guesses }) {




  const happyBanner = (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> You got it in {''}
        <strong>{guesses.length} guesses</strong>.
      </p>
    </div>
  )
  const sadBanner = (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
  )

  return (
    <div>
      {won === 'win' ? happyBanner : sadBanner}
    </div>
  )
}

export default Banner;
