import styles from './CartItem.module.css';

import { Product } from 'src/types/product';
import { Icon } from '../Icon/Icon';
import coinIcon from 'src/assets/img/coin.svg';

interface Props {
  product: Product;
}

export const CartItem = (props: Props) => {
  const {
    product: { imgSrc, name, price },
  } = props;

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
            <Icon src={coinIcon} width={16} height={16} />
            {price}
          </div>
        </div>
      </div>
      <div className={styles['RemoveButton']}></div>
    </div>
  );
};
