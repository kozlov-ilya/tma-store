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

export const TokenManager = () => {
  /* --------------------------------- tokens --------------------------------- */
  const token = {
    init: async (dispatch: React.Dispatch<TokenAction>) => {
      const fetchedTokenAmount = await fetchTokenAmount();

      if (!fetchedTokenAmount) {
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

      if (!fetchedTokenAmount) return;

      await pushTokenAmount(fetchedTokenAmount + tokens);

      dispatch({
        type: TokenActionKind.ADD_TOKENS,
        payload: tokens,
      });
    },
    remove: async (dispatch: React.Dispatch<TokenAction>, tokens: number) => {
      const fetchedTokenAmount = await fetchTokenAmount();

      if (!fetchedTokenAmount) return;

      await pushTokenAmount(fetchedTokenAmount - tokens);

      dispatch({
        type: TokenActionKind.REMOVE_TOKENS,
        payload: tokens,
      });
    },
  };
  /* ------------------------------ transactions ------------------------------ */
  const transaction = {
    init: async (dispatch: React.Dispatch<TokenAction>) => {
      const fetchedTransactions = await fetchTransactions();

      if (!fetchedTransactions) {
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

      if (!fetchedTransactions) return;

      const id = uuidv4();
      const date = moment().format();

      const newTransaction: Transaction = { id, action, value, date };

      await pushTransactions([...fetchedTransactions, newTransaction]);

      dispatch({
        type: TokenActionKind.ADD_TRANSACTION,
        payload: newTransaction,
      });
    },
  };

  return { token, transaction };
};
