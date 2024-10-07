import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { TokenAction, TokenActionKind } from 'src/contexts/tokenContext';
import {
  fetchTokenAmount,
  pushTokenAmount,
  fetchTransactions,
  pushTransactions,
} from 'src/lib/token';
import { Transaction, TransactionAction } from 'src/types/transaction';

const createTokenManager = () => {
  /* --------------------------------- tokens --------------------------------- */
  const token = {
    init: async (dispatch: React.Dispatch<TokenAction>) => {
      const fetchedTokenAmount = await fetchTokenAmount();

      if (fetchedTokenAmount === null) {
        await pushTokenAmount(0);

        return;
      }

      dispatch({
        type: TokenActionKind.UPDATE_TOKENS,
        payload: fetchedTokenAmount,
      });
    },
    add: async (dispatch: React.Dispatch<TokenAction>, tokens: number) => {
      const fetchedTokenAmount = await fetchTokenAmount();

      if (fetchedTokenAmount === null) return;

      await pushTokenAmount(fetchedTokenAmount + tokens);

      dispatch({
        type: TokenActionKind.ADD_TOKENS,
        payload: tokens,
      });
    },
    remove: async (dispatch: React.Dispatch<TokenAction>, tokens: number) => {
      const fetchedTokenAmount = await fetchTokenAmount();

      if (fetchedTokenAmount === null) return;

      await pushTokenAmount(fetchedTokenAmount - tokens);

      dispatch({
        type: TokenActionKind.REMOVE_TOKENS,
        payload: tokens,
      });
    },
    reset: async (dispatch: React.Dispatch<TokenAction>) => {
      await pushTokenAmount(0);

      dispatch({
        type: TokenActionKind.UPDATE_TOKENS,
        payload: 0,
      });
    },
  };
  /* ------------------------------ transactions ------------------------------ */
  const transaction = {
    init: async (dispatch: React.Dispatch<TokenAction>) => {
      const fetchedTransactions = await fetchTransactions();

      if (fetchedTransactions === null) {
        await pushTransactions([]);

        return;
      }

      dispatch({
        type: TokenActionKind.UPDATE_TRANSACTIONS,
        payload: fetchedTransactions,
      });
    },
    add: async (
      dispatch: React.Dispatch<TokenAction>,
      action: TransactionAction,
      value: number,
    ) => {
      const fetchedTransactions = await fetchTransactions();

      if (fetchedTransactions === null) return;

      const id = uuidv4();
      const date = moment().format();

      const newTransaction: Transaction = { id, action, value, date };

      await pushTransactions([
        ...fetchedTransactions.slice(-2),
        newTransaction,
      ]);

      dispatch({
        type: TokenActionKind.ADD_TRANSACTION,
        payload: newTransaction,
      });
    },
    reset: async (dispatch: React.Dispatch<TokenAction>) => {
      const fetchedTransactions = await fetchTransactions();

      if (fetchedTransactions === null) return;

      await pushTransactions([]);

      dispatch({
        type: TokenActionKind.UPDATE_TRANSACTIONS,
        payload: [],
      });
    },
  };

  return { token, transaction };
};

export const TokenManager = createTokenManager();
