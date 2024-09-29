import styles from './ProductCard.module.css';

import { Button } from '@telegram-apps/telegram-ui';
import { Product } from 'src/types/product';
import { Icon } from '../Icon/Icon';
import coinIcon from 'src/assets/img/coin.svg';
import { useProduct } from 'src/hooks/useProduct';
import { SaveButton } from '../SaveButton/SaveButton';
import { useMutation } from '@tanstack/react-query';

export const ProductCard = (props: { product: Product }) => {
  const { product } = props;
  const { id, imgSrc, name, price } = product;

  const {
    addProductToCart,
    removeProductFromCart,
    checkIfProductInCart,
    addProductToSaved,
    removeProductFromSaved,
    checkIfProductSaved,
  } = useProduct();

  const isProductInCart = checkIfProductInCart(id);
  const isProductSaved = checkIfProductSaved(id);

  const onCartButtonClick = async (isProductInCart: boolean) => {
    if (isProductInCart) {
      await removeProductFromCart(id);

      return;
    }

    await addProductToCart(product);
  };

  const onSaveButtonClick = async (isProductSaved: boolean) => {
    if (isProductSaved) {
      await removeProductFromSaved(id);

      return;
    }

    await addProductToSaved(product);
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
            onClick={() => mutationSave.mutate(isProductSaved)}
            disabled={mutationSave.isPending}
            isActive={isProductSaved}
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
          <Button
            className={styles[`Button`]}
            onClick={() => mutationCart.mutate(isProductInCart)}
            size="m"
            stretched={true}
            loading={mutationCart.isPending}
            disabled={mutationCart.isPending}
            data-danger={isProductInCart}
          >
            {isProductInCart ? 'Remove' : 'To Cart'}
          </Button>
        </div>
      </div>
    </div>
  );
};
