import styles from './CoinsIndicator.module.css';

import { useUserCoins } from 'src/hooks/useUserCoins';
import { useCloudStorage } from 'src/hooks/useCloudStorage';
import { useUserCoinsContext } from 'src/contexts/userCoinsContext';
import { useState } from 'react';

export const CoinsIndicator = () => {
  const [isPending, setIsPending] = useState(false);
  const { setItem } = useCloudStorage();
  const { coins, setCoins } = useUserCoinsContext();

  return (
    <div>
      <div>{coins}</div>
      <button
        onClick={async () => {
          setIsPending(true);

          await setItem('coins', `${coins + 1}`);

          setCoins(coins + 1);

          setIsPending(false);
        }}
        disabled={isPending}
      >
        Add coin
      </button>
    </div>
  );
};
