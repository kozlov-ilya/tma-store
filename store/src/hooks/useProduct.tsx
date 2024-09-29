import { useProductContext } from 'src/contexts/productContext';
import {
  fetchCatalog,
  fetchProductsInCart,
  pushProductsInCart,
  fetchProductsSaved,
  pushProductsSaved,
} from 'src/lib/products';
import { Product } from 'src/types/product';

export const useProduct = () => {
  const {
    catalog,
    setCatalog,
    productsInCart,
    setProductsInCart,
    productsSaved,
    setProductsSaved,
  } = useProductContext();

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

  const initProductsSaved = async () => {
    const productsSaved = await fetchProductsSaved();

    if (!productsSaved) {
      await pushProductsSaved([]);

      setProductsSaved([]);

      return;
    }

    setProductsSaved(productsSaved);
  };

  const updateProductsInCart = async (products: Product[]) => {
    await pushProductsInCart(products);

    setProductsInCart(products);
  };

  const updateProductsSaved = async (products: Product[]) => {
    await pushProductsSaved(products);

    setProductsSaved(products);
  };

  const addProductToCart = async (product: Product) => {
    const productsInCart = await fetchProductsInCart();

    if (!productsInCart) return;

    const newProductsInCart = [...productsInCart, product];

    await updateProductsInCart(newProductsInCart);
  };

  const addProductToSaved = async (product: Product) => {
    const productsSaved = await fetchProductsSaved();

    if (!productsSaved) return;

    const newProductsSaved = [...productsSaved, product];

    await updateProductsSaved(newProductsSaved);
  };

  const removeProductFromCart = async (productIdToRemove: string) => {
    const productsInCart = await fetchProductsInCart();

    if (!productsInCart) return;

    const newProductsInCart = productsInCart.filter(
      ({ id }) => id !== productIdToRemove,
    );

    await updateProductsInCart(newProductsInCart);
  };

  const removeProductFromSaved = async (productIdToRemove: string) => {
    const productsSaved = await fetchProductsSaved();

    if (!productsSaved) return;

    const newProductsSaved = productsSaved.filter(
      ({ id }) => id !== productIdToRemove,
    );

    await updateProductsSaved(newProductsSaved);
  };

  const checkIfProductInCart = (productId: string) => {
    return !!productsInCart.find(({ id }) => id === productId);
  };

  const checkIfProductSaved = (productId: string) => {
    return !!productsSaved.find(({ id }) => id === productId);
  };

  return {
    catalog,
    initCatalog,
    productsInCart,
    initProductsInCart,
    addProductToCart,
    removeProductFromCart,
    checkIfProductInCart,
    productsSaved,
    initProductsSaved,
    addProductToSaved,
    removeProductFromSaved,
    checkIfProductSaved,
  };
};
