import { useUserCoinsContext } from 'src/contexts/userCoinsContext';
import { fetchUserCoins, pushUserCoins } from 'src/lib/coins';

export const useUserCoins = () => {
  const { coins, setCoins } = useUserCoinsContext();

  const initUserCoins = async () => {
    const userCoins = await fetchUserCoins();

    if (!userCoins) {
      await pushUserCoins(0);

      setCoins(0);

      return;
    }

    setCoins(userCoins);
  };

  const updateUserCoins = async (coins: number) => {
    await pushUserCoins(coins);

    setCoins(coins);
  };

  return { coins, initUserCoins, updateUserCoins };
};
