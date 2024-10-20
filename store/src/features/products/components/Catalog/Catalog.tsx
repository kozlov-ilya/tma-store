import styles from './Catalog.module.css';

import { ProductCard } from '../ProductCard/ProductCard';
import { useProductStateContext } from 'features/products/contexts/productContext';

export const Catalog = () => {
  const { catalog, cart, collection, savedProducts } = useProductStateContext();

  return (
    <div className={styles['Catalog']}>
      <div className={styles['ProductList']}>
        {catalog.map((product) => (
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
    </div>
  );
};
