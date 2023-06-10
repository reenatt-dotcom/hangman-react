import React, { useState, useEffect } from 'react';
import WordDisplay from './WordDisplay';
import AttemptsDisplay from './AttemptsDisplay';
import InputForm from './InputForm';
import HangmanCanvas from './HangmanCanvas';
import MessageDisplay from './MessageDisplay';

const App = () => {
  const [secretWord, setSecretWord] = useState('hangman'); // The secret word to be guessed
  const [guessedLetters, setGuessedLetters] = useState([]); // Array of guessed letters
  const [incorrectGuesses, setIncorrectGuesses] = useState(0); // Number of incorrect guesses
  const [gameWon, setGameWon] = useState(false); // Flag indicating if the game is won
  const [gameOver, setGameOver] = useState(false); // Flag indicating if the game is over

  // Update the game state when a new letter is guessed
  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      const updatedGuesses = [...guessedLetters, letter];
      setGuessedLetters(updatedGuesses);
      if (!secretWord.includes(letter)) {
        setIncorrectGuesses(incorrectGuesses + 1);
      }
    }
  };

  // Check if the game is won or lost after each guess
  useEffect(() => {
    const wordArray = secretWord.split('');
    const remainingLetters = wordArray.filter((letter) => !guessedLetters.includes(letter));

    if (remainingLetters.length === 0) {
      setGameWon(true);
    } else if (incorrectGuesses === 6) {
      setGameOver(true);
    }
  }, [secretWord, guessedLetters, incorrectGuesses]);

  // Reset the game
  const resetGame = () => {
    setSecretWord('hangman');
    setGuessedLetters([]);
    setIncorrectGuesses(0);
    setGameWon(false);
    setGameOver(false);
  };

  return (
    <div>
      <h1>Hangman Game</h1>
      <WordDisplay secretWord={secretWord} guessedLetters={guessedLetters} />
      <AttemptsDisplay incorrectGuesses={incorrectGuesses} />
      <InputForm handleGuess={handleGuess} disabled={gameWon || gameOver} />
      <HangmanCanvas incorrectGuesses={incorrectGuesses} />
      {gameWon && <MessageDisplay message="You won!" resetGame={resetGame} />}
      {gameOver && <MessageDisplay message="Game Over" resetGame={resetGame} />}
    </div>
  );
};

export default App;
