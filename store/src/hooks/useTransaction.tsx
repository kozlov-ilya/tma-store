import {
  fetchTransactionHistory,
  pushTransactionHistory,
} from 'src/lib/transactions';
import { useTransactionContext } from 'src/contexts/transactionContext';
import { Transaction, TransactionAction } from 'src/types/transaction';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

export const useTransaction = () => {
  const { transactionHistory, setTransactionHistory } = useTransactionContext();

  const defaultTransactionHistory: Transaction[] = [];

  const initTransactionHistory = async () => {
    const existingHistory = await fetchTransactionHistory();

    if (!existingHistory) {
      await pushTransactionHistory(defaultTransactionHistory);

      setTransactionHistory(defaultTransactionHistory);

      return;
    }

    setTransactionHistory(existingHistory);
  };

  const updateTransactionHistory = async (transactions: Transaction[]) => {
    await pushTransactionHistory(transactions);

    setTransactionHistory(transactions);
  };

  const resetTransactionHistory = async () => {
    await pushTransactionHistory(defaultTransactionHistory);

    setTransactionHistory(defaultTransactionHistory);
  };

  const addNewTransaction = async (
    action: TransactionAction,
    value: number,
  ) => {
    const existingHistory = await fetchTransactionHistory();

    if (!existingHistory) return;

    const id = uuidv4();
    const date = moment().format();

    const newTransaction: Transaction = { id, action, value, date };

    // existingHistory.push(newTransaction);
    const newHistory = [...existingHistory.slice(-2), newTransaction];

    await updateTransactionHistory(newHistory);
  };

  return {
    transactionHistory,
    initTransactionHistory,
    updateTransactionHistory,
    resetTransactionHistory,
    addNewTransaction,
  };
};
