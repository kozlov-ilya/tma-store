import { createContext, useContext, useState } from 'react';

import { Transaction } from 'src/types/transaction';

type ContextType = {
  transactionHistory: Transaction[];
  setTransactionHistory: React.Dispatch<React.SetStateAction<Transaction[]>>;
};

const TransactionContext = createContext<ContextType | null>(null);

export const TransactionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [transactionHistory, setTransactionHistory] = useState<Transaction[]>(
    [],
  );

  return (
    <TransactionContext.Provider
      value={{ transactionHistory, setTransactionHistory }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactionContext = () => {
  const context = useContext(TransactionContext);

  if (!context) {
    throw new Error(
      'TransactionContext must be used within TransactionContextProvider',
    );
  }

  return context;
};
