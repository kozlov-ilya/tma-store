import { useEffect } from 'react';
import { useProductDispatchContext } from 'src/contexts/productContext';
import { ProductManager } from 'src/services/ProductManager';

export const useInitStore = () => {
  const dispatch = useProductDispatchContext();

  const { catalog, cart, collection, savedProducts } = ProductManager;

  useEffect(() => {
    const initStore = async () => {
      await catalog.init(dispatch);
      await cart.init(dispatch);
      await collection.init(dispatch);
      await savedProducts.init(dispatch);
    };

    initStore();
  }, [catalog, cart, collection, savedProducts, dispatch]);
};
