import { formatDate } from 'src/lib/date';
import styles from './TransactionCard.module.css';
import { Icon } from '../Icon/Icon';
import coinIcon from 'src/assets/img/coin.svg';
import { Transaction } from 'src/types/transaction';
import { memo } from 'react';

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
      <div className={styles['Icon']}></div>
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
          <Icon src={coinIcon} width={14} height={14} />
        </div>
      </div>
    </div>
  );
});
