export type TransactionAction = 'deposit' | 'buy';

export type Transaction = {
  id: string;
  action: TransactionAction;
  value: number;
  date: string;
};
