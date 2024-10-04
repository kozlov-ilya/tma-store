import { useProductDispatchContext } from 'src/contexts/productContext';
import { ProductManager } from 'src/services/ProductManager';
import { Product } from 'src/types/product';

export const useProduct = () => {
  const dispatch = useProductDispatchContext();

  const { catalog, cart, collection, savedProducts } = ProductManager;

  return {
    initCatalog: () => catalog.init(dispatch),
    initCart: () => cart.init(dispatch),
    initCollection: () => collection.init(dispatch),
    initSavedProducts: () => savedProducts.init(dispatch),

    // Cart
    addProductToCart: (product: Product) => cart.addProduct(dispatch, product),
    removeProductFromCart: (productId: string) =>
      cart.removeProduct(dispatch, productId),

    // Collection
    addProductToCollection: (product: Product) =>
      collection.addProduct(dispatch, product),
    removeProductFromCollection: (productId: string) =>
      collection.removeProduct(dispatch, productId),

    // savedProducts
    addProductToSavedProducts: (product: Product) =>
      savedProducts.addProduct(dispatch, product),
    removeProductFromSavedProducts: (productId: string) =>
      savedProducts.removeProduct(dispatch, productId),
  };
};
