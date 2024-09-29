import styles from './TransactionHistory.module.css';

import { TransactionCard } from '../TransactionCard/TransactionCard';
import { Button } from '@telegram-apps/telegram-ui';
import { useTransaction } from 'src/hooks/useTransaction';

export const TransactionHistory = () => {
  const { transactionHistory, resetTransactionHistory } = useTransaction();

  const reversedHistory = [...transactionHistory].reverse();

  return (
    <div className={styles['TransactionHistory']}>
      <div className={styles['Title']}>Recent Transactions</div>
      <div className={styles['TransactionList']}>
        {reversedHistory.map(({ id, action, value, date }) => (
          <TransactionCard key={id} action={action} value={value} date={date} />
        ))}
      </div>
      <Button
        stretched
        onClick={async () => {
          resetTransactionHistory();
        }}
      >
        Reset history
      </Button>
    </div>
  );
};
