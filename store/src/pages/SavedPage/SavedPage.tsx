import styles from './SavedPage.module.css';

import { useProduct } from 'src/hooks/useProduct';
import { ProductCard } from 'src/components/ProductCard/ProductCard';

const SavedPage = () => {
  const { productsSaved } = useProduct();

  return (
    <div className={styles['SavedPage']}>
      {productsSaved.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default SavedPage;
