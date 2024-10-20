import styles from './ProductCard.module.css';

import { useMutation } from '@tanstack/react-query';
import { memo } from 'react';

import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
import { SaveButton } from '../SaveButton';
import { Product } from 'src/types/product';
import { useProduct } from 'features/products/hooks/useProduct';
import { useStore } from 'hooks';

interface ProductCardProps {
  product: Product;
  isInCart: boolean;
  isInCollection: boolean;
  isInSavedProducts: boolean;
}

export const ProductCard = memo((props: ProductCardProps) => {
  const { product, isInCart, isInCollection, isInSavedProducts } = props;
  const { id: productId, imgSrc, name, price } = product;

  const {
    addProductToSavedProducts,
    removeProductFromSavedProducts,
    addProductToCart,
    removeProductFromCart,
  } = useProduct();

  const { sellProduct } = useStore();

  const onCartButtonClick = async () => {
    if (isInCart) {
      await removeProductFromCart(productId);

      return;
    }

    await addProductToCart(product);
  };

  const onSaveButtonClick = async () => {
    if (isInSavedProducts) {
      await removeProductFromSavedProducts(productId);

      return;
    }

    await addProductToSavedProducts(product);
  };

  const onSellButtonClick = async () => {
    await sellProduct(product);
  };

  const mutationCart = useMutation({
    mutationFn: onCartButtonClick,
  });

  const mutationSave = useMutation({
    mutationFn: onSaveButtonClick,
  });

  const mutationSell = useMutation({
    mutationFn: onSellButtonClick,
  });

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
        <div className={styles['SaveButtonContainer']}>
          <SaveButton
            size="l"
            onClick={() => mutationSave.mutate()}
            disabled={mutationSave.isPending}
            isActive={isInSavedProducts}
          />
        </div>
      </div>
      <div className={styles['Footer']}>
        <div className={styles['Info']}>
          <div className={styles['Title']}>{`#${name}`}</div>
          <span className={styles['Price']}>
            <Icon icon="Coin" size={16} />
            {price}
          </span>
        </div>
        <div className={styles['ButtonContainer']}>
          {isInCollection ? (
            <Button
              onClick={() => mutationSell.mutate()}
              size="m"
              stretched={true}
              loading={mutationSell.isPending}
              disabled={mutationSell.isPending}
              context={'alternative'}
            >
              Sell
            </Button>
          ) : (
            <Button
              onClick={() => mutationCart.mutate()}
              size="m"
              stretched={true}
              loading={mutationCart.isPending}
              disabled={mutationCart.isPending}
              context={isInCart ? 'danger' : undefined}
            >
              {isInCart ? 'Remove' : 'To Cart'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
});
