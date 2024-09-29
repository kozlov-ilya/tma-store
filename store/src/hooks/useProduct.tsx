import { useProductContext } from 'src/contexts/productContext';
import {
  fetchCatalog,
  fetchProductsInCart,
  pushProductsInCart,
} from 'src/lib/products';
import { Product } from 'src/types/product';

export const useProduct = () => {
  const { catalog, setCatalog, productsInCart, setProductsInCart } =
    useProductContext();

  const initCatalog = async () => {
    const fetchedCatalog = await fetchCatalog();

    setCatalog(fetchedCatalog);
  };

  const initProductsInCart = async () => {
    const productsInCart = await fetchProductsInCart();

    if (!productsInCart) {
      await pushProductsInCart([]);

      setProductsInCart([]);

      return;
    }

    setProductsInCart(productsInCart);
  };

  const updateProductsInCart = async (products: Product[]) => {
    await pushProductsInCart(products);

    setProductsInCart(products);
  };

  const addProductToCart = async (product: Product) => {
    const productsInCart = await fetchProductsInCart();

    if (!productsInCart) return;

    const newProductsInCart = [...productsInCart, product];

    await updateProductsInCart(newProductsInCart);
  };

  const removeProductFromCart = async (productIdToRemove: string) => {
    const productsInCart = await fetchProductsInCart();

    if (!productsInCart) return;

    const newProductsInCart = productsInCart.filter(
      ({ id }) => id !== productIdToRemove,
    );

    await updateProductsInCart(newProductsInCart);
  };

  const isProductInCart = (productId: string) => {
    return !!productsInCart.find(({ id }) => id === productId);
  };

  return {
    catalog,
    initCatalog,
    productsInCart,
    initProductsInCart,
    addProductToCart,
    removeProductFromCart,
    isProductInCart,
  };
};
