import styles from './DepositForm.module.css';

import { Button } from '@telegram-apps/telegram-ui';
import { CoinChip } from '../CoinChip/CoinChip';
import { Icon } from '../Icon/Icon';
import coinIcon from 'src/assets/img/coin.svg';
import { useState } from 'react';
import { useUserCoins } from 'src/hooks/useUserCoins';
import { useTransaction } from 'src/hooks/useTransaction';

const depositValues = [100, 250, 500];

export const DepositForm = () => {
  const [coinsToDeposit, setCoinsToDeposit] = useState(0);
  const [isPending, setIsPending] = useState(false);
  const { coins, updateUserCoins } = useUserCoins();
  const { addNewTransaction } = useTransaction();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    setIsPending(true);

    await updateUserCoins(coins + coinsToDeposit);

    await addNewTransaction('deposit', coinsToDeposit);

    setIsPending(false);

    setCoinsToDeposit(0);
  };

  return (
    <form className={styles['DepositForm']} onSubmit={onSubmit}>
      <div className={styles['CoinChips']}>
        {depositValues.map((value) => {
          return (
            <CoinChip
              value={value}
              key={value}
              isActive={coinsToDeposit === value}
              setCoinsToDeposit={setCoinsToDeposit}
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
        disabled={!coinsToDeposit || isPending}
        loading={isPending}
        type="submit"
      >
        Deposit
      </Button>
    </form>
  );
};
