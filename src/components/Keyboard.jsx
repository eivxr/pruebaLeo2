import React from 'react';
import './../App.css'

export const Keyboard = ({ guessedLetters, onLetterClick }) => {
  const keyboardLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const handleClick = (letter) => {
    onLetterClick(letter);
  };

  return (
    <div className='keyboard'>
      {keyboardLetters.map((letter, index) => (
        <button
          key={index}
          onClick={() => handleClick(letter)}
        
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

