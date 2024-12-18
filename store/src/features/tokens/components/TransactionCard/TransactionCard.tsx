import { formatDate } from 'src/utils/date';
import styles from './TransactionCard.module.css';
import { Icon } from 'components/Icon';
import { Transaction } from 'src/types/transaction';
import { memo } from 'react';

import { FaArrowUp, FaArrowDown } from 'react-icons/fa6';

interface Props {
  transaction: Transaction;
}

const actionTitles = new Map([
  ['receive', 'Receive'],
  ['send', 'Send'],
]);

export const TransactionCard = memo((props: Props) => {
  const {
    transaction: { action, value, date },
  } = props;

  const title = actionTitles.get(action);
  const dateLabel = formatDate(date);

  return (
    <div className={styles['TransactionCard']}>
      <div className={styles['Icon']}>
        {action === 'send' ? (
          <FaArrowUp size={24} />
        ) : (
          <FaArrowDown size={24} />
        )}
      </div>
      <div className={styles['Info']}>
        <div className={styles['Text']}>
          <div className={styles['Title']}>{title}</div>
          <div className={styles['Date']}>{dateLabel}</div>
        </div>
        <div className={styles['Tokens']}>
          <span className={`${styles['Value']} ${styles[`Value_${action}`]}`}>
            <span>{action === 'receive' ? '+' : '-'}</span>
            <span>{`${value}.00`}</span>
          </span>
          <Icon icon="Coin" size={14} />
        </div>
      </div>
    </div>
  );
});
