import React from 'react';

const MessageDisplay = ({ message, resetGame }) => {
  return (
    <div>
      <p>{message}</p>
      <button onClick={resetGame}>Play Again</button>
    </div>
  );
};

export default MessageDisplay;
