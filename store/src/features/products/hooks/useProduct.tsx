import { useProductDispatchContext } from 'features/products/contexts/productContext';
import { ProductManager } from 'src/services/ProductManager';
import { Product } from 'src/types/product';

export const useProduct = () => {
  const dispatch = useProductDispatchContext();

  const { catalog, cart, collection, savedProducts } = ProductManager;

  return {
    // Catalog
    initCatalog: () => catalog.init(dispatch),

    // Cart
    initCart: () => cart.init(dispatch),
    updateCart: (products: Product[]) => cart.update(dispatch, products),
    addProductToCart: (product: Product) => cart.addProduct(dispatch, product),
    removeProductFromCart: (productId: string) =>
      cart.removeProduct(dispatch, productId),

    // Collection
    initCollection: () => collection.init(dispatch),
    updateCollection: (products: Product[]) =>
      collection.update(dispatch, products),
    addProductToCollection: (product: Product) =>
      collection.addProduct(dispatch, product),
    removeProductFromCollection: (productId: string) =>
      collection.removeProduct(dispatch, productId),
    pushProducts: (products: Product[]) =>
      collection.pushProducts(dispatch, products),

    // savedProducts
    initSavedProducts: () => savedProducts.init(dispatch),
    updateSavedProducts: (products: Product[]) =>
      savedProducts.update(dispatch, products),
    addProductToSavedProducts: (product: Product) =>
      savedProducts.addProduct(dispatch, product),
    removeProductFromSavedProducts: (productId: string) =>
      savedProducts.removeProduct(dispatch, productId),
  };
};
