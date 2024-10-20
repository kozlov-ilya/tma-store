import styles from './BalanceDisplay.module.css';

import { useTokenStateContext } from 'features/tokens/contexts/tokenContext';
import { Icon } from 'components/Icon';

export const BalanceDisplay = () => {
  const { tokenAmount } = useTokenStateContext();

  return (
    <div className={styles['BalanceDisplay']}>
      <div className={styles['Title']}>Your Balance</div>
      <div className={styles['TokenContainer']}>
        <Icon icon="Coin" size={36} />
        <div className={styles['TokensValue']}>{`${tokenAmount}.00`}</div>
      </div>
    </div>
  );
};
