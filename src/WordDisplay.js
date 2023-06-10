import React from 'react';

const WordDisplay = ({ secretWord, guessedLetters }) => {
  const getDisplayWord = () => {
    const letters = secretWord.split('');
    return letters.map((letter, index) => {
      if (guessedLetters.includes(letter)) {
        return <span key={index}>{letter} </span>;
      } else {
        return <span key={index}>_ </span>;
      }
    });
  };

  return <div>{getDisplayWord()}</div>;
};

export default WordDisplay;
