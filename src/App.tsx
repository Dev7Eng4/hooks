import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Effect from './components/Effect';
import NoRerender from './components/NoRerender';
import RightClick from './components/RightClick';

function App() {
  const [name, setName] = useState('A');

  const handleClick = () => {
    setName((prev) => `${prev}N`);
  };
  return (
    <div className='App'>
      <RightClick defaultName={name} />
      <Effect />
      <NoRerender />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
