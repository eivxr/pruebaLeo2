import React from 'react'
import '../../src/img/1.png';
import './../App.css'

export const Hangman = ({guesses}) => {


  return (
    <div className='hangman-container'  style={{backgroundImage:`url(../../src/img/${guesses}.png)`}}>
    
    </div>
  )
}
