import React, { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('');

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className='container' style={{ backgroundColor: bgColor }}>
      <button className='btn red' onClick={() => changeColor('red')}>RED</button>
      <button className='btn green' onClick={() => changeColor('green')}>GREEN</button>
      <button className='btn blue' onClick={() => changeColor('blue')}>BLUE</button>
      <button className='btn yellow' onClick={() => changeColor('yellow')}>YELLOW</button>
    </div>
  );
}

export default App;
