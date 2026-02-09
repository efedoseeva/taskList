export const Counter = ({ handleClick, counter }) => {
  return (
    <div style={{ alignContent: 'center' }}>
      <h3>Нажми на кнопку 5 раз, чтобы увидеть слона</h3>

      <button
        style={{
          width: '100px',
          height: '50px',
          border: '1px solid red',
          backgroundColor: 'pink',
        }}
        onClick={handleClick}
      >
        + {counter}
      </button>
    </div>
  );
};
