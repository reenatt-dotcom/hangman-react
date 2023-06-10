import React, { useRef, useEffect } from 'react';

const HangmanCanvas = ({ incorrectGuesses }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the vertical rod
    ctx.beginPath();
    ctx.moveTo(80, 20);
    ctx.lineTo(80, 240);
    ctx.stroke();

    // Draw the horizontal line under the rod
    ctx.beginPath();
    ctx.moveTo(20, 240);
    ctx.lineTo(140, 240);
    ctx.stroke();

    // Draw the hangman figure based on the number of incorrect guesses
    if (incorrectGuesses >= 1) {
      // Head
      ctx.beginPath();
      ctx.arc(80, 70, 20, 0, Math.PI * 2);
      ctx.stroke();
    }

    if (incorrectGuesses >= 2) {
      // Body
      ctx.beginPath();
      ctx.moveTo(80, 90);
      ctx.lineTo(80, 200);
      ctx.stroke();
    }

    if (incorrectGuesses >= 3) {
      // Left arm
      ctx.beginPath();
      ctx.moveTo(80, 110);
      ctx.lineTo(60, 160);
      ctx.stroke();
    }

    if (incorrectGuesses >= 4) {
      // Right arm
      ctx.beginPath();
      ctx.moveTo(80, 110);
      ctx.lineTo(100, 160);
      ctx.stroke();
    }

    if (incorrectGuesses >= 5) {
      // Left leg
      ctx.beginPath();
      ctx.moveTo(80, 200);
      ctx.lineTo(60, 240);
      ctx.stroke();
    }

    if (incorrectGuesses >= 6) {
      // Right leg
      ctx.beginPath();
      ctx.moveTo(80, 200);
      ctx.lineTo(100, 240);
      ctx.stroke();
    }
  }, [incorrectGuesses]);

  return <canvas ref={canvasRef} width={160} height={250} />;
};

export default HangmanCanvas;
