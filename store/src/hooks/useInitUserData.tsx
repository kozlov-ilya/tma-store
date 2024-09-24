import { useUserCoins } from './useUserCoins';
import { useTransaction } from './useTransaction';
import { useEffect } from 'react';

export const useInitUserData = () => {
  const { initUserCoins } = useUserCoins();
  const { initTransactionHistory } = useTransaction();

  useEffect(() => {
    const initUserData = async () => {
      await initUserCoins();
      await initTransactionHistory();
    };

    console.log('Init user data');

    initUserData();
  }, []);
};
