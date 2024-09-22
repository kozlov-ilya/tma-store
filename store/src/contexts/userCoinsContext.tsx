import { createContext, useContext, useState } from 'react';

type ContextType = {
  coins: number;
  setCoins: React.Dispatch<React.SetStateAction<number>>;
};

const UserCoinsContext = createContext<ContextType | null>(null);

export const UserCoinsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [coins, setCoins] = useState(0);

  return (
    <UserCoinsContext.Provider value={{ coins, setCoins }}>
      {children}
    </UserCoinsContext.Provider>
  );
};

export const useUserCoinsContext = () => {
  const context = useContext(UserCoinsContext);

  if (!context) {
    throw new Error(
      'UserCoinsContext must be used within UserCoinsContextProvider',
    );
  }

  return context;
};
