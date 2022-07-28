import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [colors, setColors] = useState(["red"])
  const [currentColorIndex, setCurrentColorIndex] = useState(0) 
  const [colorInput, setColorInput] = useState("");

  const handleColorClick = (indx) => {
    setCurrentColorIndex(indx)
  }

  const addNewColor = (e) => {
    e.preventDefault();
    setColors([...colors, colorInput])
  }

  const handleColorInputChange = (e) => {
    setColorInput(e.target.value)
  }

  return (
    <div className="App">
      <header>
        <p style={{color: colors[currentColorIndex]}}>
          Color: {colors[currentColorIndex]}
        </p>
      </header>
      <main>
        <ul>
            {colors.map((color, index) => {
              return (
                <li key={color}>
                  <button  style={{backgroundColor: colors[index]}} className='colored-btn' onClick={() => handleColorClick(index)}>
                    {colors[index]}
                  </button>
                </li>
              )
            })}
        </ul>
        <aside>
          <h2>Add a Color!</h2>
          <form onSubmit={addNewColor}>
            <label htmlFor='color'>
              Color
            </label>
            {/* <input id="color" type="text" value={colorInput} onChange={handleColorInputChange}/> */}
            <input id="color" type="color" value={colorInput} onChange={handleColorInputChange}/>
            <input type="submit" value="add color"/>
          </form>
        </aside>
      </main>
    </div>
  );
}

export default App;
