import styles from './Cart.module.css';
import { CartItem } from '../CartItem/CartItem';
import { useProductStateContext } from 'src/contexts/productContext';

export const Cart = () => {
  const { cart } = useProductStateContext();

  return (
    <div className={styles['Cart']}>
      {cart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
};
