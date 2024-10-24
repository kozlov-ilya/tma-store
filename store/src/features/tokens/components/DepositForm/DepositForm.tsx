import styles from './DepositForm.module.css';

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { TokenChip } from '../TokenChip';
import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
import { useToken } from 'src/features/tokens/hooks/useToken';

const depositValues = [100, 250, 500];

export const DepositForm = () => {
  const [tokensToDeposit, setTokensToDeposit] = useState(0);

  const { addTokens, addTransaction, resetTokens } = useToken();

  const depositMutation = useMutation({
    mutationFn: async () => {
      await addTokens(tokensToDeposit);

      await addTransaction('receive', tokensToDeposit);
    },
  });

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    depositMutation.mutate();
  };

  return (
    <form className={styles['DepositForm']} onSubmit={onSubmit}>
      <div className={styles['TokenChips']}>
        {depositValues.map((value) => {
          return (
            <TokenChip
              value={value}
              key={value}
              isActive={tokensToDeposit === value}
              setTokensToDeposit={setTokensToDeposit}
              mode="mono"
              before={<Icon icon="Coin" size={18} />}
            />
          );
        })}
      </div>
      <Button
        size="m"
        stretched
        mode="filled"
        disabled={!tokensToDeposit || depositMutation.isPending}
        loading={depositMutation.isPending}
        type="submit"
      >
        Deposit
      </Button>
      <Button
        size="m"
        stretched
        mode="filled"
        onClick={async () => {
          await resetTokens();
        }}
      >
        Reset
      </Button>
    </form>
  );
};
