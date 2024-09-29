import { createContext, useContext, useState } from 'react';
import { Product } from 'src/types/product';

type ContextType = {
  catalog: Product[];
  setCatalog: React.Dispatch<React.SetStateAction<Product[]>>;
  productsInCart: Product[];
  setProductsInCart: React.Dispatch<React.SetStateAction<Product[]>>;
};

const ProductContext = createContext<ContextType | null>(null);

export const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [catalog, setCatalog] = useState<Product[]>([]);
  const [productsInCart, setProductsInCart] = useState<Product[]>([]);

  return (
    <ProductContext.Provider
      value={{ catalog, setCatalog, productsInCart, setProductsInCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error(
      'ProductContext must be used within ProductContextProvider',
    );
  }

  return context;
};
