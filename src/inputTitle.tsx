import { useState, useEffect } from 'react';

export function InputTitle() {
  const [text, setText] = useState('');

  useEffect(() => {
    document.title = text;
  }, [text]);

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Введите текст"
        onChange={(event) => setText(event.target.value)}
      />
    </div>
  );
}
