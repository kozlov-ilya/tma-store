import { UserCoinsContextProvider } from 'src/contexts/userCoinsContext';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <UserCoinsContextProvider>{children}</UserCoinsContextProvider>;
};
