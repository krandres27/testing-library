import { useState } from 'react';
import './App.css';

function App() {
  const [isBlue, setIsBlue] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  return (
    <div className="App">
      <button
        style={{ backgroundColor: isBlue ? 'blue' : 'red' }}
        onClick={() => setIsBlue(true)}
        disabled={isButtonDisabled}
      >
        {isBlue ? 'Change to red' : 'Change to blue'}
      </button>
      <input
        type="checkbox"
        aria-checked={isButtonDisabled}
        checked={isButtonDisabled}
        onChange={() => setIsButtonDisabled((prevValue) => !prevValue)}
      />
    </div>
  );
}

export default App;
