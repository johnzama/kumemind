import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [entry, setEntry] = useState('');
  const [saved, setSaved] = useState(false);

  // Load saved journal if exists
  useEffect(() => {
    const savedEntry = localStorage.getItem('kumemind_journal');
    if (savedEntry) setEntry(savedEntry);
  }, []);

  const handleSave = () => {
    localStorage.setItem('kumemind_journal', entry);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="App">
      <header>
        <h1>🧠 KumeMind</h1>
        <p>Write freely. Your thoughts stay on this device.</p>
      </header>
      <main>
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Start journaling..."
          rows="10"
          style={{ width: '90%', marginTop: '20px', padding: '10px', fontSize: '1em' }}
        />
        <div style={{ marginTop: '10px' }}>
          <button onClick={handleSave}>💾 Save</button>
          {saved && <span style={{ marginLeft: '10px', color: 'green' }}>Saved!</span>}
        </div>
      </main>
    </div>
  );
}

export default App;
