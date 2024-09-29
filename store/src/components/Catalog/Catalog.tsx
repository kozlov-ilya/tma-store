import styles from './Catalog.module.css';

import { ProductCard } from '../ProductCard/ProductCard';
import { useProduct } from 'src/hooks/useProduct';

export const Catalog = () => {
  const { catalog } = useProduct();

  return (
    <div className={styles['Catalog']}>
      <div className={styles['ProductList']}>
        {catalog.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
