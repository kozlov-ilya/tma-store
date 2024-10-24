import styles from './Collection.module.css';

import { useProductStateContext } from 'features/products/contexts/productContext';
import { ProductCard } from '../ProductCard';
import { Title } from 'components/Title';
import { Placeholder } from 'components/Placeholder';
import placeholderImg from 'assets/lottie/shpooky-sad.json';

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
      {!collection.length && (
        <Placeholder
          header="You haven’t purchased anything yet"
          // description="Buy something to make Shpooky happy"
          button={{ navigateTo: '/', text: 'Explore the Catalog' }}
          lottie={{ animationData: placeholderImg, width: 150 }}
        />
      )}
    </div>
  );
};
