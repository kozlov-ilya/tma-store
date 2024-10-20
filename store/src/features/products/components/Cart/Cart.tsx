import styles from './Cart.module.css';

import { useMutation } from '@tanstack/react-query';

import { Button } from 'components/Button';
import { CartItem } from '../CartItem';
import { Icon } from 'components/Icon';
import { Title } from 'components/Title';

import { useProductStateContext } from 'features/products/contexts/productContext';
import { useStore } from 'hooks';

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
      <Title role="secondary" text="My Cart" />
      <div className={styles['ProductList']}>
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      <div className={styles['CheckoutContainer']}>
        <div className={styles['PriceContainer']}>
          <span className={styles['PriceTitle']}>Total Price</span>
          <span className={styles['PriceValue']}>
            <Icon icon="Coin" size={18} />
            {totalPrice}
          </span>
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
