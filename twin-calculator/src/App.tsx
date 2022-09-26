import React from 'react';
import './App.css';
import './assets/css/style.css'
import Calculator from './components/calculator/Calculator';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          <Button>Nice</Button>
        </p>
      </header> */}

      <Calculator />

    </div>
  );
}

export default App;
