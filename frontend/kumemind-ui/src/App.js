import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>🧠 KumeMind</h1>
        <p>A space to think, write, and rebuild—privately.</p>
      </header>
      <main>
        <textarea
          placeholder="Start journaling..."
          rows="10"
          style={{ width: '90%', marginTop: '20px', padding: '10px', fontSize: '1em' }}
        ></textarea>
      </main>
    </div>
  );
}

export default App;
