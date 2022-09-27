import React from 'react';
import './App.css';
import './assets/css/style.css'
import Button from './components/button/Button';
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
          <Button variant="moveresult">&lt;</Button>
          <Button variant="moveresult">&gt;</Button>
          <Button variant="function">del</Button>
        </section>
        <Calculator />
      </main>

    </div>
  );
}

export default App;
