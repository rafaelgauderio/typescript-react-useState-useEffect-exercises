import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);

  // useState tem 2 parâmetros
  // 1º valor do estado que se deseja armazenar
  // 2º funcao que altera o valor desse estado

  function incrementValue() {
    if (counter >= 0) {
      setCounter(counter + 1);
    }

  }

  function decrementValue() {
    if (counter > 0) {
      setCounter(counter - 1);
    }

  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>Counter = {counter}</h2>
        <button onClick={incrementValue}>Increment</button>
        <button onClick={decrementValue}>Decrement</button>
      </div>

    </>
  )
}

export default App
