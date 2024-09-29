import { Product } from 'src/types/product';
import { getItem, setItem } from './cloudStorage';

export const fetchCatalog = async () => {
  const response = await fetch(
    'https://kozlov-ilya.github.io/data/tma-store/data/catalog.json',
  );

  if (!response.ok) {
    throw new Error(`Catalog fetch error: ${response.status}`);
  }

  const fetchedCatalog: Product[] = await response.json();

  return fetchedCatalog;
};

export const fetchProductsInCart = async () => {
  try {
    const productsInCart = await getItem('products-in-cart');

    if (!productsInCart) return null;

    const parsedProductsInCart: Product[] = JSON.parse(productsInCart);

    return parsedProductsInCart;
  } catch {
    throw new Error('Error fetching products in cart');
  }
};

export const pushProductsInCart = async (products: Product[]) => {
  try {
    const productsInCart = JSON.stringify(products);

    await setItem('products-in-cart', productsInCart);
  } catch {
    throw new Error('Error pushing products in cart');
  }
};

export const fetchProductsSaved = async () => {
  try {
    const productsSaved = await getItem('products-saved');

    if (!productsSaved) return null;

    const parsedProductsSaved: Product[] = JSON.parse(productsSaved);

    return parsedProductsSaved;
  } catch {
    throw new Error('Error fetching saved products');
  }
};

export const pushProductsSaved = async (products: Product[]) => {
  try {
    const productsSaved = JSON.stringify(products);

    await setItem('products-saved', productsSaved);
  } catch {
    throw new Error('Error pushing saved products');
  }
};
