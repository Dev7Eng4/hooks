import React, { Suspense, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import NoRerender from './components/NoRerender';
import RightClick from './components/RightClick';
import Count from './components/ErrorInReactNeedExplain';

const Effect = React.lazy(() => import('./components/Effect'));
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
      {/* <Count isUseLayout={false} />
      <Count isUseLayout />
      <RightClick defaultName={name} /> */}
      <Suspense fallback={<p>Loading...</p>}>
        <Effect />
      </Suspense>
      {/* <NoRerender /> */}
      {/* <button onClick={handleClick}>Click</button>
      <button onClick={handleImport}>Dynamic Import</button>
      {components.map((c) => c)} */}
    </div>
  );
}

export default App;
