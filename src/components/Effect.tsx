import React, { useEffect, useState } from 'react';

const Effect = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  useEffect(() => {
    if (age === 2) {
      setAge(10);
      setName('Name');
    }
  }, [age]);

  console.log('outline re-render');

  const handleClick = () => {
    setAge((prevAge) => prevAge + 1);
    setName((prevName) => prevName + 'n');
  };

  return (
    <div>
      <p>Count</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Effect;
