import { useState } from 'react';
import { Counter } from './Counter';
import { Elephant } from './Elephant';
import { Congratulations } from './Congratulations';
import { GameOver } from './GameOver';

export const Game = () => {
  const [status, setStatus] = useState('counter');
  const [counter, setCounter] = useState(0);
  const [weight, setWeight] = useState(100);

  const handleClick = () => {
    const newValue = counter + 1;
    if (newValue === 5) {
      handleFinish();
    }
    setCounter(newValue);
  };

  const handleFinish = () => {
    setStatus('elephant');
  };

  const handleRepeat = () => {
    setStatus('counter');
    setCounter(0);
    setWeight(100);
  };

  const handleFeed1 = () => {
    setWeight(weight + 20);
  };

  const handleFeed2 = () => {
    setWeight(weight - 20);
  };

  return (
    <div>
      {status === 'counter' && (
        <Counter handleClick={handleClick} counter={counter} />
      )}
      {status === 'elephant' && weight < 200 && weight > 20 && (
        <Elephant
          handleRepeat={handleRepeat}
          handleFeed1={handleFeed1}
          handleFeed2={handleFeed2}
          weight={weight}
        />
      )}
      {status === 'elephant' && weight >= 200 && (
        <Congratulations handleRepeat={handleRepeat} />
      )}
      {status === 'elephant' && weight <= 20 && (
        <GameOver handleRepeat={handleRepeat} />
      )}
    </div>
  );
};
