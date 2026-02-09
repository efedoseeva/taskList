export const Congratulations = ({ handleRepeat }) => {
  const clickHandler = () => {
    handleRepeat();
  };

  return (
    <div style={{ alignContent: 'center' }}>
      <h3>
        🎉 Поздравляю! Твой слон наелся здоровой пищи и с улыбкой побежал играть
        с другими слонами🎉
      </h3>

      <button onClick={clickHandler}>
        Давай сыграем еще раз и покормим другого слона
      </button>
      <div style={{ fontSize: '200px' }}>😊</div>
    </div>
  );
};
