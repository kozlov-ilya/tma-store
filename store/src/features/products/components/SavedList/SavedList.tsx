import styles from './SavedList.module.css';

import { ProductCard } from '../ProductCard';
import { useProductStateContext } from 'features/products/contexts/productContext';
import { Placeholder } from 'components/Placeholder';
import placeholderImg from 'assets/lottie/shpooky-angry.json';

export const SavedList = () => {
  const { savedProducts, cart, collection } = useProductStateContext();

  return (
    <div className={styles['SavedList']}>
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
      {!savedProducts.length && (
        <Placeholder
          header="You haven't saved anything yet"
          description="Why?! Didn't you like anything?!"
          lottie={{ animationData: placeholderImg, width: 150 }}
        />
      )}
    </div>
  );
};
