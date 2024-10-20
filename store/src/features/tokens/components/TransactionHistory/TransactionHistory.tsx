import styles from './TransactionHistory.module.css';

import { TransactionCard } from '../TransactionCard';
import { useTokenStateContext } from 'features/tokens/contexts/tokenContext';
import { useToken } from 'features/tokens/hooks/useToken';
import { Button } from 'components/Button';
import { Title } from 'components/Title';

export const TransactionHistory = () => {
  const { transactions } = useTokenStateContext();
  const { resetTransactions } = useToken();

  const transactionsFromNewToOld = [...transactions].reverse();

  return (
    <div className={styles['TransactionHistory']}>
      <Title role="secondary" text="Recent Transactions" />
      <div className={styles['TransactionList']}>
        {transactionsFromNewToOld.map((transaction) => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))}
      </div>
      {/* <Button
        stretched
        onClick={async () => {
          await resetTransactions();
        }}
      >
        Reset transactions
      </Button> */}
    </div>
  );
};
