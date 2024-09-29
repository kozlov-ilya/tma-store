import styles from './Cart.module.css';
import { useProduct } from 'src/hooks/useProduct';
import { CartItem } from '../CartItem/CartItem';

export const Cart = () => {
  const { productsInCart } = useProduct();

  return (
    <div className={styles['Cart']}>
      {productsInCart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
};
