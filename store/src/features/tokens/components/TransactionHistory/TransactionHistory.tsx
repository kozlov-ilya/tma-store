import styles from './TransactionHistory.module.css';

import { TransactionCard } from '../TransactionCard';
import { useTokenStateContext } from 'features/tokens/contexts/tokenContext';
import { useToken } from 'features/tokens/hooks/useToken';
import { Button } from 'components/Button';
import { Title } from 'components/Title';

import { Placeholder } from 'src/components/Placeholder';
import placeholderImg from 'assets/lottie/shpooky-fly.json';

export const TransactionHistory = () => {
  const { transactions } = useTokenStateContext();
  const { resetTransactions } = useToken();

  const transactionsFromNewToOld = [...transactions].reverse();

  return (
    <div className={styles['TransactionHistory']}>
      <Title role="secondary" text="Recent Transactions" />
      {!!transactions.length && (
        <div className={styles['TransactionList']}>
          {transactionsFromNewToOld.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))}
        </div>
      )}
      {!transactions.length && (
        <Placeholder
          header="You haven't made any transactions yet"
          lottie={{ animationData: placeholderImg, width: 150 }}
        />
      )}
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
