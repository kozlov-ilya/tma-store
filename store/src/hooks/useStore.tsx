import { Product } from 'src/types/product';
import { useProduct } from '../features/products/hooks/useProduct';
import { useToken } from '../features/tokens/hooks/useToken';
import { StoreManager } from 'src/services/StoreManager';
import { useProductDispatchContext } from 'src/features/products/contexts/productContext';
import { useTokenDispatchContext } from 'src/features/tokens/contexts/tokenContext';

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
