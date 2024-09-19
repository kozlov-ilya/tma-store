import styles from './Homepage.module.css';

import { ProductCard } from '../../components/ProductCard/ProductCard';

const Homepage = () => {
  return (
    <div>
      <h1 className={styles['Title']}>Homepage</h1>
      <div className={styles['CardsList']}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Homepage;
