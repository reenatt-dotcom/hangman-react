import React, { useState } from 'react';

const InputForm = ({ handleGuess, disabled }) => {
  const [guess, setGuess] = useState('');

  const handleChange = (event) => {
    setGuess(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (guess.trim() !== '') {
      handleGuess(guess.toLowerCase());
      setGuess('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={guess} onChange={handleChange} disabled={disabled} />
      <button type="submit" disabled={disabled}>
        Guess
      </button>
    </form>
  );
};

export default InputForm;
