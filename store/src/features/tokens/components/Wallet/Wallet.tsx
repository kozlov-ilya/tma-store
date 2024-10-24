import styles from './Wallet.module.css';

import { BalanceDisplay } from '../BalanceDisplay';
import { DepositForm } from '../DepositForm';
import { TransactionHistory } from '../TransactionHistory';

export const Wallet = () => {
  return (
    <div className={styles['Wallet']}>
      <BalanceDisplay />
      <DepositForm />
      <TransactionHistory />
    </div>
  );
};
