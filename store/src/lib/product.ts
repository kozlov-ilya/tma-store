import { Product } from 'src/types/product';
import { getItem, setItem } from './cloudStorage';

/* --------------------------------- catalog -------------------------------- */
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

/* ---------------------------------- cart ---------------------------------- */
export const fetchCart = async () => {
  try {
    const cart = await getItem('cart');

    if (!cart) return null;

    const parsedCart: Product[] = JSON.parse(cart);

    return parsedCart;
  } catch {
    throw new Error('Error fetching cart');
  }
};

export const pushCart = async (products: Product[]) => {
  try {
    const cart = JSON.stringify(products);

    await setItem('cart', cart);
  } catch {
    throw new Error('Error pushing cart');
  }
};

/* ---------------------------------- saved --------------------------------- */
export const fetchSavedProducts = async () => {
  try {
    const savedProducts = await getItem('saved-products');

    if (!savedProducts) return null;

    const parsedSavedProducts: Product[] = JSON.parse(savedProducts);

    return parsedSavedProducts;
  } catch {
    throw new Error('Error fetching saved products');
  }
};

export const pushSavedProducts = async (products: Product[]) => {
  try {
    const saveProducts = JSON.stringify(products);

    await setItem('saved-products', saveProducts);
  } catch {
    throw new Error('Error pushing saved products');
  }
};

/* ------------------------------- collection ------------------------------- */
export const fetchCollection = async () => {
  try {
    const collection = await getItem('collection');

    if (!collection) return null;

    const parsedCollection: Product[] = JSON.parse(collection);

    return parsedCollection;
  } catch {
    throw new Error('Error fetching collection');
  }
};

export const pushCollection = async (products: Product[]) => {
  try {
    const collection = JSON.stringify(products);

    await setItem('collection', collection);
  } catch {
    throw new Error('Error pushing collection');
  }
};
