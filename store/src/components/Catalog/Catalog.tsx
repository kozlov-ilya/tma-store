import styles from './Catalog.module.css';

import { ProductCard } from '../ProductCard/ProductCard';
import { useProductStateContext } from 'src/contexts/productContext';

export const Catalog = () => {
  const { catalog } = useProductStateContext();

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
