export type TransactionAction = 'send' | 'receive';

export type Transaction = {
  id: string;
  action: TransactionAction;
  value: number;
  date: string;
};
