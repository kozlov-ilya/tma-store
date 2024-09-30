import {
  ProductActionKind,
  ProductAction,
  ProductState,
} from 'src/contexts/productContext';
import {
  fetchCart,
  fetchCatalog,
  fetchCollection,
  fetchSavedProducts,
  pushCart,
  pushCollection,
  pushSaveProducts,
} from 'src/lib/products';
import { Product } from 'src/types/product';

const createProductManager = (
  stateKey: keyof ProductState,
  fetchProducts: () => Promise<Product[] | null>,
  pushProducts: (products: Product[]) => Promise<void>,
) => {
  return {
    init: async (dispatch: React.Dispatch<ProductAction>) => {
      const products = await fetchProducts();

      if (!products) {
        await pushProducts([]);

        return;
      }

      dispatch({ type: ProductActionKind.UPDATE, payload: products, stateKey });
    },
    addProduct: async (
      dispatch: React.Dispatch<ProductAction>,
      product: Product,
    ) => {
      const products = await fetchProducts();

      if (!products) return;

      await pushProducts([...products, product]);

      dispatch({ type: ProductActionKind.ADD, payload: product, stateKey });
    },
    removeProduct: async (
      dispatch: React.Dispatch<ProductAction>,
      productId: string,
    ) => {
      const products = await fetchProducts();

      if (!products) return;

      await pushProducts(products.filter(({ id }) => id !== productId));

      dispatch({
        type: ProductActionKind.REMOVE,
        payload: productId,
        stateKey,
      });
    },
  };
};

const cartManager = createProductManager('cart', fetchCart, pushCart);
const collectionManager = createProductManager(
  'collection',
  fetchCollection,
  pushCollection,
);
const savedProductsManager = createProductManager(
  'savedProducts',
  fetchSavedProducts,
  pushSaveProducts,
);

const catalogManager = {
  init: async (dispatch: React.Dispatch<ProductAction>) => {
    const products = await fetchCatalog();

    if (!products) return;

    dispatch({
      type: ProductActionKind.UPDATE,
      payload: products,
      stateKey: 'catalog',
    });
  },
};

export const ProductManager = {
  catalog: catalogManager,
  cart: cartManager,
  collection: collectionManager,
  savedProducts: savedProductsManager,
};
