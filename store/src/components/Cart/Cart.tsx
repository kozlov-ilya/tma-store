import styles from './Cart.module.css';
import { CartItem } from '../CartItem/CartItem';
import { useProductStateContext } from 'src/contexts/productContext';
import { Button } from '../Button/Button';

export const Cart = () => {
  const { cart } = useProductStateContext();

  return (
    <div className={styles['Cart']}>
      <div className={styles['ProductList']}>
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      <Button stretched>Buy</Button>
    </div>
  );
};
