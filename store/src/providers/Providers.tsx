import { UserCoinsContextProvider } from 'src/contexts/userCoinsContext';
import { TransactionContextProvider } from 'src/contexts/transactionContext';
import { ProductContextProvider } from 'src/contexts/productContext';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserCoinsContextProvider>
      <TransactionContextProvider>
        <ProductContextProvider>{children}</ProductContextProvider>
      </TransactionContextProvider>
    </UserCoinsContextProvider>
  );
};
