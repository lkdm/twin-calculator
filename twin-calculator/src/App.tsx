import React from 'react';
import './App.css';
import './assets/css/style.css'
import Calculator from './components/calculator/Calculator';

function App() {
  return (
    <div className="App">
      <header>
        <p>
          Twin Calculator
        </p>
      </header>

      <main role="main">
        <Calculator />
        <section className="app-keypad">
          <button className="keypad-button">&lt;</button>
          <button className="keypad-button">&gt;</button>
          <button className="keypad-button">del</button>
        </section>
        <Calculator />
      </main>

    </div>
  );
}

export default App;
