import { createContext, useContext, useReducer } from 'react';
import { Product } from 'src/types/product';

export interface ProductState {
  catalog: Product[];
  cart: Product[];
  collection: Product[];
  savedProducts: Product[];
}

export enum ProductActionKind {
  UPDATE = 'UPDATE',
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

export type ProductAction =
  | {
      type: ProductActionKind.UPDATE;
      stateKey: keyof ProductState;
      payload: Product[];
    }
  | {
      type: ProductActionKind.ADD;
      stateKey: keyof ProductState;
      payload: Product;
    }
  | {
      type: ProductActionKind.REMOVE;
      stateKey: keyof ProductState;
      payload: string;
    };

const initialState: ProductState = {
  catalog: [],
  cart: [],
  collection: [],
  savedProducts: [],
};

const productReducer = (
  state: ProductState,
  { type, payload, stateKey }: ProductAction,
): ProductState => {
  switch (type) {
    case ProductActionKind.UPDATE:
      return { ...state, [stateKey]: payload };
    case ProductActionKind.ADD:
      return { ...state, [stateKey]: [...state[stateKey], payload] };
    case ProductActionKind.REMOVE:
      return {
        ...state,
        [stateKey]: state[stateKey].filter(({ id }) => id !== payload),
      };
    default:
      return state;
  }
};

type ProductStateContextType = ProductState;

type ProductDispatchContextType = React.Dispatch<ProductAction>;

export const ProductStateContext =
  createContext<ProductStateContextType | null>(null);
export const ProductDispatchContext =
  createContext<ProductDispatchContextType | null>(null);

export const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductStateContext.Provider value={state}>
      <ProductDispatchContext.Provider value={dispatch}>
        {children}
      </ProductDispatchContext.Provider>
    </ProductStateContext.Provider>
  );
};

export const useProductStateContext = () => {
  const context = useContext(ProductStateContext);

  if (!context) {
    throw new Error(
      'ProdcutStateContext must be used within ProdcutStateContextProvider',
    );
  }

  return context;
};

export const useProductDispatchContext = () => {
  const context = useContext(ProductDispatchContext);

  if (!context) {
    throw new Error(
      'ProdcutDispatchContext must be used within ProdcutDispatchContextProvider',
    );
  }

  return context;
};

// const createProductReducer = (stateKey: keyof ProductState) => {
//   const reducer = (
//     state: ProductState,
//     action: ProductAction,
//   ): ProductState => {
//     switch (action.type) {
//       case ProductActionKind.UPDATE:
//         return { ...state, [stateKey]: action.payload };
//       case ProductActionKind.ADD:
//         return { ...state, [stateKey]: [...state[stateKey], action.payload] };
//       case ProductActionKind.REMOVE:
//         return {
//           ...state,
//           [stateKey]: state[stateKey].filter(({ id }) => id !== action.payload),
//         };
//       default:
//         return state;
//     }
//   };

//   return reducer;
// };

// const cartReducer = createProductReducer('cart');
// const collectionReducer = createProductReducer('collection');
// const savedProductsReducer = createProductReducer('savedProducts');

// const rootReducer = (
//   state: ProductState,
//   action: ProductAction,
// ): ProductState => {
//   switch (action.stateKey) {
//     case 'cart':
//       return {
//         ...state,
//         cart: cartReducer(state, action).cart,
//       };
//     case 'collection':
//       return {
//         ...state,
//         collection: collectionReducer(state, action).collection,
//       };
//     case 'savedProducts':
//       return {
//         ...state,
//         savedProducts: savedProductsReducer(state, action).savedProducts,
//       };
//     default:
//       return state;
//   }
// };
