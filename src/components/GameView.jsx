import { useState } from 'react'
import '../App.css'

import { Hangman } from './Hangman'
import { Keyboard } from './Keyboard'
import {Status} from './Status'
import { Word } from './Word'



export function GameView() {

  const word = localStorage.getItem('palabra'); //Nuestra palabra secreta 

  //Letras adivinadas y errores
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [guesses, setGuesses] = useState(0);


  // manejamos los clicks en el teclado 

  const handleLetterClick = (letter) => {

    if (guessedLetters.includes(letter)) { //validamos si ya fue adivinada
      return;
    }

    setGuessedLetters([...guessedLetters, letter]); //Agregamos la letra adivinada al arreglo que las contiene(estado)

    if (!word.includes(letter)) {
      setGuesses(guesses + 1); //Si la letra no se encuentra en la palabra,aumentamos el numero de errores en 1.
    }

  };


  const win = word.split('').every((letter) => guessedLetters.includes(letter)); //victoria
  const lost = guesses >= 6; 

  const handleTryAgain = ()=>{
    window.location.reload();
  }

  return (
    <div className="m-content">
      <div className="game-title">
        <h1>Hangman Game</h1>
      </div>
      <Hangman guesses={guesses} className='hangman-img'/>
      <Word word={word} guessedLetters={guessedLetters} className='word-cont' />
      <Keyboard guessedLetters={guessedLetters} onLetterClick={handleLetterClick} className='keyboard-cont' />
      <Status win={win} lost={lost}/>
      <button onClick={handleTryAgain}>Intentar de nuevo</button>
    </div>
  )
}
