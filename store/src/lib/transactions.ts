import { getItem, setItem } from './cloudStorage';
import { Transaction } from 'src/types/transaction';

export const fetchTransactionHistory = async () => {
  try {
    const transactionHistory = await getItem('transaction-history');

    if (transactionHistory === undefined) return null;

    const parsedTransactionsHistory: Transaction[] =
      JSON.parse(transactionHistory);

    return parsedTransactionsHistory;
  } catch {
    throw new Error('Error fetching transaction-history');
  }
};

export const pushTransactionHistory = async (transactions: Transaction[]) => {
  try {
    const transactionHistory = JSON.stringify(transactions);

    await setItem('transaction-history', transactionHistory);
  } catch {
    throw new Error('Error setting transaction-history');
  }
};
