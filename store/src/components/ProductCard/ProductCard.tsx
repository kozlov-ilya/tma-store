import styles from './ProductCard.module.css';

import { Button } from '@telegram-apps/telegram-ui';
import { Product } from 'src/types/product';
import { Icon } from '../Icon/Icon';
import coinIcon from 'src/assets/img/coin.svg';
import { useProduct } from 'src/hooks/useProduct';
import { useState } from 'react';

export const ProductCard = (props: { product: Product }) => {
  const { product } = props;
  const { id, imgSrc, name, price } = product;

  const [isPending, setIsPending] = useState(false);

  const { addProductToCart, isProductInCart, removeProductFromCart } =
    useProduct();

  const onAdd = async () => {
    setIsPending(true);

    await addProductToCart(product);

    setIsPending(false);
  };

  const onRemove = async () => {
    setIsPending(true);

    await removeProductFromCart(id);

    setIsPending(false);
  };

  const productInCart = isProductInCart(id);

  return (
    <div className={styles['ProductCard']}>
      <div className={styles['ImageContainer']}>
        <img
          src={imgSrc}
          width="100%"
          height="100%"
          alt="card-image"
          className={styles['Image']}
        />
      </div>
      <div className={styles['Footer']}>
        <div className={styles['Info']}>
          <div className={styles['Title']}>{name}</div>
          <span className={styles['Price']}>
            <Icon src={coinIcon} width={16} height={16} />
            {price}
          </span>
        </div>
        <div className={styles['ButtonContainer']}>
          {
            <Button
              className={styles[`Button`]}
              onClick={productInCart ? onRemove : onAdd}
              size="m"
              stretched={true}
              loading={isPending}
              disabled={isPending}
              data-danger={productInCart}
            >
              {productInCart ? 'Remove' : 'To Cart'}
            </Button>
          }
        </div>
      </div>
    </div>
  );
};
