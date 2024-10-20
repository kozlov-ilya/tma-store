import styles from './SavedList.module.css';

import { ProductCard } from '../ProductCard';
import { useProductStateContext } from 'features/products/contexts/productContext';

export const SavedList = () => {
  const { savedProducts, cart, collection } = useProductStateContext();

  return (
    <div className={styles['SavedList']}>
      {savedProducts.length ? (
        savedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isInCart={!!cart.find(({ id }) => id === product.id)}
            isInCollection={!!collection.find(({ id }) => id === product.id)}
            isInSavedProducts={
              !!savedProducts.find(({ id }) => id === product.id)
            }
          />
        ))
      ) : (
        <div>No saved Products</div>
      )}
    </div>
  );
};
