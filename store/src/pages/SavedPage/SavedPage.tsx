import styles from './SavedPage.module.css';

import { ProductCard } from 'src/components/ProductCard/ProductCard';
import { useProductStateContext } from 'src/contexts/productContext';

const SavedPage = () => {
  const { savedProducts, cart, collection } = useProductStateContext();

  return (
    <div className={styles['SavedPage']}>
      {savedProducts.map((product) => (
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

export default SavedPage;
