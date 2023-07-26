import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = (val: number) => {
    setCount((prevCount) => prevCount + val);
  };

  return (
    <>
      <div className='counter-container'>
        <button onClick={() => handleClick(1)}>+</button>
        <span className={count > 0 ? 'green' : count < 0 ? 'red' : ''}>
          {count}
        </span>
        <button onClick={() => handleClick(-1)}>-</button>
      </div>
    </>
  );
};
