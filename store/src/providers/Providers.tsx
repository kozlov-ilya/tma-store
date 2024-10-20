import { ProductContextProvider } from 'features/products/contexts/productContext';
import { TokenContextProvider } from 'features/tokens/contexts/tokenContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProductContextProvider>
      <TokenContextProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </TokenContextProvider>
    </ProductContextProvider>
  );
};
