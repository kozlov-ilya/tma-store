import { UserCoinsContextProvider } from 'src/contexts/userCoinsContext';
import { TransactionContextProvider } from 'src/contexts/transactionContext';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserCoinsContextProvider>
      <TransactionContextProvider>{children}</TransactionContextProvider>
    </UserCoinsContextProvider>
  );
};
