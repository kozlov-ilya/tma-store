import styles from './BalanceDisplay.module.css';

import { useUserCoins } from 'src/hooks/useUserCoins';
import coinIcon from 'src/assets/img/coin.svg';

export const BalanceDisplay = () => {
  const { coins } = useUserCoins();

  return (
    <div className={styles['BalanceDisplay']}>
      <div className={styles['Title']}>Your Balance</div>
      <div className={styles['CoinsContainer']}>
        <div className={styles['CoinIcon']}>
          <img src={coinIcon} alt="coin" width={36} height={36} />
        </div>
        <div className={styles['CoinsValue']}>{`${coins}.00`}</div>
      </div>
    </div>
  );
};
