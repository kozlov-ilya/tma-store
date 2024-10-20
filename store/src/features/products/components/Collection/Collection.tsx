import styles from './Collection.module.css';

import { useProductStateContext } from 'features/products/contexts/productContext';
import { ProductCard } from '../ProductCard';
import { Title } from 'components/Title';

export const Collection = () => {
  const { collection, cart, savedProducts } = useProductStateContext();

  return (
    <div className={styles['Collection']}>
      <Title role="secondary" text="My Collection" />
      {collection.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isInCart={!!cart.find(({ id }) => id === product.id)}
          isInCollection={!!collection.find(({ id }) => id === product.id)}
          isInSavedProducts={
            !!savedProducts.find(({ id }) => id === product.id)
          }
        />
      ))}
    </div>
  );
};
