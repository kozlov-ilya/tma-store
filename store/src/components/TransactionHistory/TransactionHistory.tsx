import styles from './TransactionHistory.module.css';

import { TransactionCard } from '../TransactionCard/TransactionCard';
import { Button } from '@telegram-apps/telegram-ui';
import { useTokenStateContext } from 'src/contexts/tokenContext';
import { useToken } from 'src/hooks/useToken';

export const TransactionHistory = () => {
  const { transactions } = useTokenStateContext();
  const { resetTransactions } = useToken();

  const transactionsFromNewToOld = [...transactions].reverse();

  return (
    <div className={styles['TransactionHistory']}>
      <div className={styles['Title']}>Recent Transactions</div>
      <div className={styles['TransactionList']}>
        {transactionsFromNewToOld.map((transaction) => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))}
      </div>
      <Button
        stretched
        onClick={async () => {
          await resetTransactions();
        }}
      >
        Reset transactions
      </Button>
    </div>
  );
};
