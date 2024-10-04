import styles from './BalanceDisplay.module.css';

import coinIcon from 'src/assets/img/coin.svg';
import { useTokenStateContext } from 'src/contexts/tokenContext';

export const BalanceDisplay = () => {
  const { tokenAmount } = useTokenStateContext();

  return (
    <div className={styles['BalanceDisplay']}>
      <div className={styles['Title']}>Your Balance</div>
      <div className={styles['TokensContainer']}>
        <div className={styles['TokenIcon']}>
          <img src={coinIcon} alt="Token" width={36} height={36} />
        </div>
        <div className={styles['TokensValue']}>{`${tokenAmount}.00`}</div>
      </div>
    </div>
  );
};
