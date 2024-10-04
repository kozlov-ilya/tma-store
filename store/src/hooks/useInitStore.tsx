import { useEffect } from 'react';
import { useProduct } from './useProduct';
import { useToken } from './useToken';

export const useInitStore = () => {
  const { initCollection, initCart, initCatalog, initSavedProducts } =
    useProduct();
  const { initTokens, initTransactions } = useToken();

  useEffect(() => {
    const initStore = async () => {
      await initCollection();
      await initCart();
      await initCatalog();
      await initSavedProducts();
      await initTokens();
      await initTransactions();
    };

    initStore();
  }, [
    initCollection,
    initCart,
    initCatalog,
    initSavedProducts,
    initTokens,
    initTransactions,
  ]);
};
