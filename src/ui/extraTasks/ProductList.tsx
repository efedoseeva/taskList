import { ProductItem } from './ProductItem';

export const ProductList = (props) => {
  console.log('📋 ProductList');
  return (
    <div>
      <ul
        style={{
          listStyleType: 'none',
        }}
      >
        {props.items.map((item) => {
          return <ProductItem product={item} />;
        })}
      </ul>
    </div>
  );
};
