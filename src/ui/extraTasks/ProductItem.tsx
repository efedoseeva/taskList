import { useState, useEffect } from 'react';

export const ProductItem = (props) => {
  const [inCart, setInCart] = useState(false);

  console.log('🧺 ProductItem', inCart);

  // useEffect(() => {
  //   inCart
  //     ? alert('Товар добавлен в корзину')
  //     : alert('Товар удален из корзины');
  // }, [inCart]);

  let value = null;

  return (
    <li key={props.id}>
      <div
        style={{
          border: '1px solid black',
          margin: '3px',
          padding: '5px',
        }}
      >
        <div>id: {props.product.id}</div>
        <div>name: {props.product.name}</div>
        <div>price: {props.product.price}</div>
        <div>category: {props.product.category}</div>
        <button
          onClick={() => {
            value = inCart;
            setInCart(!inCart);
            !value
              ? alert('Товар добавлен в корзину')
              : alert('Товар удален из корзины');
          }}
          style={{ backgroundColor: inCart ? 'yellow' : 'white' }}
        >
          {inCart ? 'Товар в корзине' : 'Добавить в корзину'}
        </button>
      </div>
    </li>
  );
};
