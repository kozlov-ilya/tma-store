import styles from './WalletPage.module.css';

import { BalanceDisplay } from 'src/components/BalanceDisplay/BalanceDisplay';
import { DepositForm } from 'src/components/DepositForm/DepositForm';
import { TransactionHistory } from 'src/components/TransactionHistory/TransactionHistory';

const WalletPage = () => {
  return (
    <div className={styles['WalletPage']}>
      <BalanceDisplay />
      <DepositForm />
      <TransactionHistory />
    </div>
  );
};

export default WalletPage;
