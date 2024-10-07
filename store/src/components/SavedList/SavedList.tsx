import styles from './SavedList.module.css';

import { ProductCard } from 'src/components/ProductCard/ProductCard';
import { useProductStateContext } from 'src/contexts/productContext';
import { Placeholder } from '../Placeholder/Placeholder';
import { ThinkingIcon } from 'src/assets/icons/ThinkingIcon';
import { Icon } from '../Icon/Icon';

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
        <Placeholder header={'No saved NFTs'}>
          <Icon
            src="https://kozlov-ilya.github.io/data/tma-store/assets/gif/thinking.gif"
            height={125}
            width={125}
          />
        </Placeholder>
      )}
    </div>
  );
};
