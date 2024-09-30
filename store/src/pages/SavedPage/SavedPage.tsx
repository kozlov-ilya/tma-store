import styles from './SavedPage.module.css';

import { ProductCard } from 'src/components/ProductCard/ProductCard';
import { useProductStateContext } from 'src/contexts/productContext';

const SavedPage = () => {
  const { savedProducts } = useProductStateContext();

  return (
    <div className={styles['SavedPage']}>
      {savedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default SavedPage;
