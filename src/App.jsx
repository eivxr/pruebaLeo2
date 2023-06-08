import { useState } from 'react'
import './App.css'

import { Hangman } from './components/Hangman'
import { Keyboard } from './components/Keyboard'
import {Status} from './components/Status'
import { Word } from './components/Word'
import { AppRouter } from './AppRouter'
import {GameView} from './components/GameView'
import { Input } from './components/Input'
function App() {

  return (
 
 
      <div>
         <AppRouter/>
         
      </div>
     

  )
}

export default App
