import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Effect from './components/Effect';
import NoRerender from './components/NoRerender';
import RightClick from './components/RightClick';
import Count from './components/ErrorInReactNeedExplain';

function App() {
  const [name, setName] = useState('A');
  const [components, setComponents] = useState<any[]>([]);

  const handleClick = () => {
    setName((prev) => `${prev}N`);
  };

  const handleImport = async () => {
    const Effect = await import('./components/Effect');
    setComponents([Effect]);
  };
  return (
    <div className='App'>
      <Count isUseLayout={false} />
      <Count isUseLayout />
      {/* <RightClick defaultName={name} />
      <Effect />
      <NoRerender /> */}
      {/* <button onClick={handleClick}>Click</button> */}
      <button onClick={handleImport}>Dynamic Import</button>
      {components.map((c) => c)}
    </div>
  );
}

export default App;
