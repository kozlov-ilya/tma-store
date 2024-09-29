import { useEffect } from 'react';
import { useUserCoins } from './useUserCoins';
import { useTransaction } from './useTransaction';
import { useProduct } from './useProduct';

export const useInitUserData = () => {
  const { initUserCoins } = useUserCoins();
  const { initTransactionHistory } = useTransaction();
  const { initCatalog, initProductsInCart } = useProduct();

  useEffect(() => {
    const initUserData = async () => {
      await initUserCoins();
      await initTransactionHistory();
      await initCatalog();
      await initProductsInCart();
    };

    initUserData();
  }, []);
};
