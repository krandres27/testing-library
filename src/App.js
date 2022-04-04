import { useState } from 'react';
import './App.css';

function App() {
  const [isBlue, setIsBlue] = useState(false)
  return (
    <div className="App">
      <button style={{ backgroundColor: isBlue ? 'blue' : 'red' }} onClick={() => setIsBlue(true)}>
        {isBlue ? 'Change to red' : 'Change to blue'}
      </button>
    </div>
  );
}

export default App;
