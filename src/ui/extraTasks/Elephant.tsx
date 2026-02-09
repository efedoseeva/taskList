import { useState } from 'react';

export const Elephant = ({
  handleRepeat,
  handleFeed1,
  handleFeed2,
  weight,
}) => {
  const clickHandler = () => {
    handleRepeat();
  };

  let elephantWeight = 200 + weight;

  return (
    <div>
      <img
        style={{ width: `${elephantWeight}px` }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2nYGDRSUARqh0Y5rWP4pfgt9lWW7qgBZzuQ&s"
      />

      <div>
        <button onClick={handleFeed1}>
          Кормить слона полезной едой 🥬🍉🍌
        </button>
        <button onClick={handleFeed2}>Кормить слона вредной едой 🍔🍬🍕</button>
      </div>
    </div>
  );
};
