import { UserCoinsContextProvider } from 'src/contexts/userCoinsContext';
import { TransactionContextProvider } from 'src/contexts/transactionContext';
import { ProductContextProvider } from 'src/contexts/productContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserCoinsContextProvider>
      <TransactionContextProvider>
        <ProductContextProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </ProductContextProvider>
      </TransactionContextProvider>
    </UserCoinsContextProvider>
  );
};
