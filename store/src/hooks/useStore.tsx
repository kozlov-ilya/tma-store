import { Product } from 'src/types/product';
import { useProduct } from './useProduct';
import { useToken } from './useToken';
import { StoreManager } from 'src/services/StoreManager';
import { useProductDispatchContext } from 'src/contexts/productContext';
import { useTokenDispatchContext } from 'src/contexts/tokenContext';

export const useStore = () => {
  const { initCollection, initCart, initCatalog, initSavedProducts } =
    useProduct();
  const { initTokens, initTransactions } = useToken();
  const dispatchProduct = useProductDispatchContext();
  const dispatchToken = useTokenDispatchContext();

  const initStore = async () => {
    await initCollection();
    await initCart();
    await initCatalog();
    await initSavedProducts();
    await initTokens();
    await initTransactions();
  };

  const checkoutProducts = async (products: Product[]) => {
    const result = await StoreManager.checkoutProducts({
      dispatchProduct,
      dispatchToken,
      products,
    });

    return result;
  };

  const sellProduct = async (product: Product) => {
    await StoreManager.sellProduct({ dispatchProduct, dispatchToken, product });
  };

  return { initStore, checkoutProducts, sellProduct };
};
