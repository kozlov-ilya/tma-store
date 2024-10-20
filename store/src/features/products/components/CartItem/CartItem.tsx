import styles from './CartItem.module.css';

import { IconButton } from '@telegram-apps/telegram-ui';
import { MdDeleteOutline } from 'react-icons/md';
import { useMutation } from '@tanstack/react-query';
import { memo } from 'react';

import { Icon } from 'components/Icon';
import { Product } from 'src/types/product';
import { useProduct } from 'features/products/hooks/useProduct';

interface Props {
  product: Product;
}

export const CartItem = memo((props: Props) => {
  const {
    product: { id, imgSrc, name, price },
  } = props;

  const { removeProductFromCart } = useProduct();

  const mutationRemove = useMutation({
    mutationFn: async () => {
      await removeProductFromCart(id);
    },
  });

  return (
    <div className={styles['CartItem']}>
      <div className={styles['Info']}>
        <img
          className={styles['Image']}
          src={imgSrc}
          alt="product image"
          width={50}
          height={50}
        />
        <div className={styles['TextInfo']}>
          <div className={styles['Title']}>{name}</div>
          <div className={styles['Price']}>
            <Icon icon="Coin" />
            {price}
          </div>
        </div>
      </div>
      <IconButton
        className={styles['RemoveButton']}
        mode="plain"
        size="l"
        onClick={() => mutationRemove.mutate()}
        disabled={mutationRemove.isPending}
      >
        <MdDeleteOutline width={21} height={21} />
      </IconButton>
    </div>
  );
});
