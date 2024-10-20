import styles from './BalanceDisplay.module.css';

import { useTokenStateContext } from 'features/tokens/contexts/tokenContext';
import { Icon } from 'components/Icon';
import { Title } from 'components/Title';

export const BalanceDisplay = () => {
  const { tokenAmount } = useTokenStateContext();

  return (
    <div className={styles['BalanceDisplay']}>
      <Title role="secondary" text="My Balance" />
      <div className={styles['TokenContainer']}>
        <Icon icon="Coin" size={36} />
        <div className={styles['TokensValue']}>{`${tokenAmount}.00`}</div>
      </div>
    </div>
  );
};
