import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export const replaceCamelWithSpaces = (colorName) => {
  //  \B ...\B - middle of the word
  // ([A-Z]) - capital letter
  // /g - multiple times
  // $1 - the found letter
  // ' $1' - replace with space followed by the found letter
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed')
  const [isDisabled, setIsDisabled] = useState(false)

  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'

  return (
    <div>
      <button
        disabled={isDisabled}
        style={{ backgroundColor: isDisabled ? 'gray' : buttonColor, color: 'white' }}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input
        type='checkbox'
        defaultChecked={isDisabled}
        id='disable-button-checkbox'
        onChange={e => setIsDisabled(e.target.checked)}
      />
      <label htmlFor='disable-button-checkbox'>Disable Button</label>
    </div>
  );
}

export default App;
