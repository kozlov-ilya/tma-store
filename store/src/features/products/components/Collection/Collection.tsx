import styles from './Collection.module.css';

import { useProductStateContext } from 'features/products/contexts/productContext';
import { ProductCard } from '../ProductCard';
import { Title } from 'components/Title';
import { Placeholder } from 'components/Placeholder';
import { Button } from 'components/Button';
import shpookyGrave from 'assets/lottie/shpooky-grave.json';
import { useNavigate } from 'react-router-dom';

export const Collection = () => {
  const { collection, cart, savedProducts } = useProductStateContext();

  const navigate = useNavigate();

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
          description="Find the perfect piece to kick off your collection"
          action={
            <Button onClick={() => navigate('/')} stretched>
              Explore the Catalog
            </Button>
          }
          lottie={{ animationData: shpookyGrave, width: 250 }}
        />
      )}
    </div>
  );
};
