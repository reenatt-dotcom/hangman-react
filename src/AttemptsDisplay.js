import React from 'react';

const AttemptsDisplay = ({ incorrectGuesses }) => {
  const maxAttempts = 6; // Maximum number of attempts allowed

  const attemptsRemaining = maxAttempts - incorrectGuesses;

  return (
    <div>
      <p>Attempts Remaining: {attemptsRemaining}</p>
    </div>
  );
};

export default AttemptsDisplay;
