import { useTokenDispatchContext } from 'features/tokens/contexts/tokenContext';
import { TokenManager } from 'src/services/TokenManager';
import { TransactionAction } from 'src/types/transaction';

export const useToken = () => {
  const dispatch = useTokenDispatchContext();

  const { token, transaction } = TokenManager;

  return {
    /* --------------------------------- tokens --------------------------------- */
    initTokens: async () => token.init(dispatch),
    addTokens: async (tokens: number) => token.add(dispatch, tokens),
    removeTokens: async (tokens: number) => token.remove(dispatch, tokens),
    resetTokens: async () => token.reset(dispatch),

    /* ------------------------------ transactions ------------------------------ */
    initTransactions: async () => transaction.init(dispatch),
    addTransaction: async (action: TransactionAction, value: number) =>
      transaction.add(dispatch, action, value),
    resetTransactions: async () => transaction.reset(dispatch),
  };
};
