import styles from './Cart.module.css';

import { useMutation } from '@tanstack/react-query';

import { Button } from 'components/Button';
import { CartItem } from '../CartItem';
import { Icon } from 'components/Icon';
import { Title } from 'components/Title';
import { Placeholder } from 'components/Placeholder';
import placeholderImg from 'assets/lottie/shpooky-grave.json';

import { useProductStateContext } from 'features/products/contexts/productContext';
import { useStore } from 'hooks';
import { useNavigate } from 'react-router-dom';

import WebApp from '@twa-dev/sdk';

export const Cart = () => {
  const { cart } = useProductStateContext();
  const { checkoutProducts } = useStore();

  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, cur) => (sum += cur.price), 0);

  const onCheckout = async () => {
    const result = await checkoutProducts(cart);

    if (result.error) {
      WebApp.showPopup(
        {
          message: `${result.error.message}. Do you want to deposit some?`,
          buttons: [
            { type: 'default', text: 'Close' },
            { type: 'ok', id: '1' },
          ],
        },
        (id) => {
          if (id === '1') {
            navigate('/wallet');
          }
        },
      );
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
          Purchase
        </Button>
      </div>
      {/* {error && (
        <Snackbar
          onClose={() => {
            setError('');
          }}
          link={<Link to={'/wallet'}>Wallet</Link>}
          description="Deposit Tokens in Wallet to purchase your shoppings"
        >
          {error}
        </Snackbar>
      )} */}
      {!cart.length && (
        <Placeholder
          header="Your Cart is empty"
          description="Shoopky even fell asleep waiting for your shoppings"
          // button={{ navigateTo: '/', text: 'Start Shopping' }}
          lottie={{ animationData: placeholderImg, width: 150 }}
        />
      )}
    </div>
  );
};
