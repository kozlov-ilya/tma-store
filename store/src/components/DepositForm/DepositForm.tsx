import styles from './DepositForm.module.css';

import { Button } from '@telegram-apps/telegram-ui';
import { TokenChip } from '../TokenChip/TokenChip';
import { Icon } from '../Icon/Icon';
import { useState } from 'react';
import { useToken } from 'src/hooks/useToken';
import { useMutation } from '@tanstack/react-query';

import coinIcon from 'src/assets/img/coin.svg';

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
              before={
                <Icon src={coinIcon} alt="coin icon" width={18} height={18} />
              }
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
      {/* <Button
        size="m"
        stretched
        mode="filled"
        onClick={async () => {
          await resetTokens();
        }}
      >
        Reset
      </Button> */}
    </form>
  );
};
