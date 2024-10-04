import { getItem, setItem } from './cloudStorage';
import { Transaction } from 'src/types/transaction';

/* ------------------------------ token amount ------------------------------ */
export const fetchTokenAmount = async () => {
  try {
    const tokenAmount = await getItem('token-amount');

    if (!tokenAmount) return null;

    return +tokenAmount;
  } catch {
    throw new Error('Error fetching token amount');
  }
};

export const pushTokenAmount = async (tokens: number) => {
  try {
    await setItem('token-amount', `${tokens}`);
  } catch {
    throw new Error('Error pushing token amount');
  }
};

/* ------------------------------ transactions ------------------------------ */
export const fetchTransactions = async () => {
  try {
    const transactions = await getItem('transactions');

    if (!transactions) return null;

    const parsedTransactions: Transaction[] = JSON.parse(transactions);

    return parsedTransactions;
  } catch {
    throw new Error('Error fetching transactions');
  }
};

export const pushTransactions = async (transactions: Transaction[]) => {
  try {
    const stringifiedTransactions = JSON.stringify(transactions);

    await setItem('transactions', stringifiedTransactions);
  } catch {
    throw new Error('Error pushing transactions');
  }
};
