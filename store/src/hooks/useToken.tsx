import { useTokenDispatchContext } from 'src/contexts/tokenContext';
import { TokenManager } from 'src/services/TokenManager';
import { TransactionAction } from 'src/types/transaction';

export const useToken = () => {
  const dispatch = useTokenDispatchContext();

  const { token, transaction } = TokenManager();

  return {
    initTokens: async () => token.init(dispatch),
    addTokens: async (tokens: number) => token.add(dispatch, tokens),
    removeTokens: async (tokens: number) => token.remove(dispatch, tokens),
    initTransactions: async () => transaction.init(dispatch),
    addTransaction: async (action: TransactionAction, value: number) =>
      transaction.add(dispatch, action, value),
  };
};