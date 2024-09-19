import styles from './ProductCard.module.css';

import ImageReplacer from '../../assets/img/skull.jpg';
import { Button } from '@telegram-apps/telegram-ui';

interface ProductCardProps {
  imgSrc?: string;
}

export const ProductCard = (props: ProductCardProps) => {
  const { imgSrc } = props;

  return (
    <div className={styles['ProductCard']}>
      <div className={styles['ImageContainer']}>
        <img
          src={imgSrc ?? ImageReplacer}
          width="100%"
          height="100%"
          alt="card-image"
          className={styles['Image']}
        />
      </div>
      <div className={styles['Footer']}>
        <div className={styles['Info']}>
          <span className={styles['Title']}>Apple</span>
          <span className={styles['Price']}>100</span>
        </div>
        <div className={styles['ButtonContainer']}>
          <Button className={styles['AddButton']} size="m" stretched={true}>
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};
