import styles from './Cart.module.css';
import { CartItem } from '../CartItem/CartItem';
import { useProductStateContext } from 'src/contexts/productContext';
import { Button } from '../Button/Button';
import { useStore } from 'src/hooks/useStore';
import { useMutation } from '@tanstack/react-query';

export const Cart = () => {
  const { cart } = useProductStateContext();
  const { checkoutProducts } = useStore();

  const totalPrice = cart.reduce((sum, cur) => (sum += cur.price), 0);

  const onCheckout = async () => {
    const result = await checkoutProducts(cart);

    if (result.error) {
      console.log(result.error.message);
    }
  };

  const mutationCheckout = useMutation({ mutationFn: onCheckout });

  return (
    <div className={styles['Cart']}>
      <div className={styles['Title']}>My Cart</div>
      <div className={styles['ProductList']}>
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      <div className={styles['CheckoutContainer']}>
        <div className={styles['PriceContainer']}>
          <span className={styles['PriceTitle']}>Total Price</span>
          <span className={styles['PriceValue']}>{totalPrice}</span>
        </div>
        <Button
          stretched
          className={styles['CheckoutButton']}
          disabled={!totalPrice || mutationCheckout.isPending}
          loading={mutationCheckout.isPending}
          onClick={() => mutationCheckout.mutate()}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};
