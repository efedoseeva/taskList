import { useEffect, useState } from 'react';

export const Counter = () => {
  const { count, inc, dec, reset, set5 } = useCounter(0, 1, 3);

  return (
    <div style={{ display: 'flex', marginLeft: '50px' }}>
      <h2 style={{ padding: '10px' }} onClick={inc}>
        {count}
      </h2>
      <div>⏰ Автосброс через 3сек </div>
      <button onClick={inc}>Увеличить</button>
      <button onClick={dec}>Уменьшить</button>
      <button onClick={reset}>Сбросить</button>
      <button onClick={set5}>Установить шаг 5</button>
    </div>
  );
};

export const CounterWithoutAutoReset = () => {
  const { count, inc, dec, reset, set5 } = useCounter(5, 5, 0);

  return (
    <div style={{ display: 'flex', marginLeft: '50px' }}>
      <h2 style={{ padding: '10px' }} onClick={inc}>
        {count}
      </h2>
      <div>🔒 Без автосброса </div>
      <button onClick={inc}>Увеличить</button>
      <button onClick={dec}>Уменьшить</button>
      <button onClick={reset}>Сбросить</button>
      <button onClick={set5}>Установить шаг 5</button>
    </div>
  );
};

const useCounter = (startValue = 0, startStep = 1, autoResetTime = 0) => {
  const [count, setCount] = useState(startValue);
  const [step, setStep] = useState(startStep);
  console.log({ startStep, startValue, autoResetTime, count });

  useEffect(() => {
    let interval: number;
    if (autoResetTime > 0) {
      interval = setInterval(() => {
        setCount(0);
      }, autoResetTime * 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [autoResetTime]);

  const inc = () => {
    setCount(count + step);
  };

  const dec = () => {
    setCount(count - step);
  };
  const reset = () => {
    setCount(startValue);
    setStep(startStep);
  };

  const set5 = () => {
    setStep(5);
    alert('шаг 5');
  };

  return { count, inc, dec, reset, set5 };
};
