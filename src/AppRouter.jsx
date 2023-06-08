import {useState} from 'react'


import App from './App';
import { Input } from './components/Input';
import { Game } from './components/Game';
import { NotFound } from './components/NotFound';
import './App.css';

export const AppRouter = () => {

    const [route, setRoute] = useState('');

    const handleRouteChange = (newRoute) => {
      setRoute(newRoute);
    };
  
    let content = route === '/Input' ? <Input/> :route === '/Hangman' ? <Game/>: null;
  


  return (
    <div>
    <header>
      <nav>
        <ul className='ulll'>
          <li>
            <button onClick={() => handleRouteChange('/Input')}>Cambiar palabra</button>
          </li>
          <li>
            <button onClick={() => handleRouteChange('/Hangman')}>Hangman</button>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      {content}
    </main>
  </div>
  )
}
