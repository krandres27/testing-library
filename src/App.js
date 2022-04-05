import { useState } from 'react';
import './App.css';

function App() {
  const [isBlue, setIsBlue] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const backgroundColor = isButtonDisabled ? 'gray' : isBlue ? 'blue' : 'red';

  return (
    <div className="App">
      <button
        style={{ backgroundColor }}
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
        id="disablebutton-checkbox"
      />
      <label htmlFor="disablebutton-checkbox">Disable button</label>
    </div>
  );
}

export default App;
