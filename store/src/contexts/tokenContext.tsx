import { createContext, useContext, useReducer } from 'react';
import { Transaction } from 'src/types/transaction';

interface TokenState {
  tokenAmount: number;
  transactions: Transaction[];
}

export enum TokenActionKind {
  UPDATE_TOKENS = 'UPDATE_TOKENS',
  ADD_TOKENS = 'ADD_TOKENS',
  REMOVE_TOKENS = 'REMOVE_TOKENS',
  UPDATE_TRANSACTIONS = 'UPDATE_TRANSACTIONS',
  ADD_TRANSACTION = 'ADD_TRANSACTION',
}

export type TokenAction =
  | {
      type: TokenActionKind.UPDATE_TOKENS;
      payload: number;
    }
  | {
      type: TokenActionKind.ADD_TOKENS;
      payload: number;
    }
  | {
      type: TokenActionKind.REMOVE_TOKENS;
      payload: number;
    }
  | {
      type: TokenActionKind.UPDATE_TRANSACTIONS;
      payload: Transaction[];
    }
  | {
      type: TokenActionKind.ADD_TRANSACTION;
      payload: Transaction;
    };

const tokenReducer = (state: TokenState, action: TokenAction) => {
  switch (action.type) {
    case TokenActionKind.UPDATE_TOKENS:
      return { ...state, tokenAmount: action.payload };
    case TokenActionKind.ADD_TOKENS:
      return { ...state, tokenAmount: state.tokenAmount + action.payload };
    case TokenActionKind.REMOVE_TOKENS:
      return { ...state, tokenAmount: state.tokenAmount - action.payload };
    case TokenActionKind.UPDATE_TRANSACTIONS:
      return { ...state, transactions: action.payload };
    case TokenActionKind.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions.slice(-2), action.payload],
      };
  }
};

type TokenStateContextType = TokenState;
type TokenDispatchContextType = React.Dispatch<TokenAction>;

const TokenStateContext = createContext<TokenStateContextType | null>(null);
const TokenDispatchContext = createContext<TokenDispatchContextType | null>(
  null,
);

const tokenInitialState: TokenState = {
  tokenAmount: 0,
  transactions: [],
};

export const TokenContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(tokenReducer, tokenInitialState);

  return (
    <TokenStateContext.Provider value={state}>
      <TokenDispatchContext.Provider value={dispatch}>
        {children}
      </TokenDispatchContext.Provider>
    </TokenStateContext.Provider>
  );
};

export const useTokenStateContext = () => {
  const context = useContext(TokenStateContext);

  if (!context) {
    throw new Error(
      'TokenStateContext must be used within TokenStateContextProvider',
    );
  }

  return context;
};

export const useTokenDispatchContext = () => {
  const context = useContext(TokenDispatchContext);

  if (!context) {
    throw new Error(
      'TokenDispatchContext must be used within TokenDispatchContextProvider',
    );
  }

  return context;
};
