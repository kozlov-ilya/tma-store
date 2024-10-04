import { TokenAction } from 'src/contexts/tokenContext';
import { ProductAction } from 'src/contexts/productContext';
import { Product } from 'src/types/product';
import { fetchTokenAmount } from 'src/lib/token';
import { TokenManager } from './TokenManager';
import { ProductManager } from './ProductManager';

export const StoreManager = {
  checkoutProducts: async ({
    dispatchProduct,
    dispatchToken,
    products,
  }: {
    dispatchProduct: React.Dispatch<ProductAction>;
    dispatchToken: React.Dispatch<TokenAction>;
    products: Product[];
  }) => {
    const userTokenAmount = await fetchTokenAmount();

    if (userTokenAmount === null) {
      return { error: { message: 'Internal error' } };
    }

    const price = products.reduce((price, product) => price + product.price, 0);

    const tokensLeft = userTokenAmount - price;

    if (tokensLeft < 0) {
      return { error: { message: 'Not enough Tokens on Balance' } };
    }

    try {
      await TokenManager.token.remove(dispatchToken, price);
      await ProductManager.collection.pushProducts(dispatchProduct, products);
      await ProductManager.cart.update(dispatchProduct, []);
      await TokenManager.transaction.add(dispatchToken, 'send', price);
    } catch (err) {
      return { error: { message: err as string } };
    }

    return { success: { message: 'Success' } };
  },

  sellProduct: async ({
    dispatchProduct,
    dispatchToken,
    product,
  }: {
    dispatchProduct: React.Dispatch<ProductAction>;
    dispatchToken: React.Dispatch<TokenAction>;
    product: Product;
  }) => {
    try {
      await TokenManager.token.add(dispatchToken, product.price);
      await ProductManager.collection.removeProduct(
        dispatchProduct,
        product.id,
      );
      await TokenManager.transaction.add(
        dispatchToken,
        'receive',
        product.price,
      );
    } catch (err) {
      return { error: { message: err as string } };
    }
  },
};
