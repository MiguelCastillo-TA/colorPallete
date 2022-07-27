import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [colors, setColors] = useState(["red"])
  const [currentColorIndex, setCurrentColorIndex] = useState(0) 
  const [colorInput, setColorInput] = useState("");

  const handleColorClick = (indx) => {
  }

  const addNewColor = (e) => {

  }

  const handleColorInputChange = (e) => {
    // TODO
  }

  return (
    <div className="App">
      <header>
        <p>
          Color: red
        </p>
      </header>
      <main>
        <ul>
            <li>
              <button className='colored-btn'>
                red
              </button>
            </li>
        </ul>
        <aside>
          <h2>Add a Color!</h2>
          <form>
            <label htmlFor='color'>
              Color
            </label>
            <input id="color" type="text" />
            <input type="submit" value="add color"/>
          </form>
        </aside>
      </main>
    </div>
  );
}

export default App;
