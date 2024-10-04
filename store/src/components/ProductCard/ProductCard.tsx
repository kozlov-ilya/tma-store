import styles from './ProductCard.module.css';

import { Button } from '../Button/Button';
import { Product } from 'src/types/product';
import { Icon } from '../Icon/Icon';
import coinIcon from 'src/assets/img/coin.svg';
import { SaveButton } from '../SaveButton/SaveButton';
import { useMutation } from '@tanstack/react-query';
import { useProduct } from 'src/hooks/useProduct';
import { memo } from 'react';

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

  const mutationCart = useMutation({
    mutationFn: onCartButtonClick,
  });

  const mutationSave = useMutation({
    mutationFn: onSaveButtonClick,
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
          <div className={styles['Title']}>{name}</div>
          <span className={styles['Price']}>
            <Icon src={coinIcon} width={16} height={16} />
            {price}
          </span>
        </div>
        <div className={styles['ButtonContainer']}>
          {isInCollection ? (
            <Button
              onClick={() => mutationCart.mutate()}
              size="m"
              stretched={true}
              loading={mutationCart.isPending}
              disabled={mutationCart.isPending}
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
