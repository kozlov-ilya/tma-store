import {
  useProductDispatchContext,
  useProductStateContext,
} from 'src/contexts/productContext';
import { ProductManager } from 'src/services/ProductManager';
import { Product } from 'src/types/product';

export const useProduct = () => {
  const state = useProductStateContext();
  const dispatch = useProductDispatchContext();

  const { cart, collection, savedProducts } = ProductManager;

  return {
    state,

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
