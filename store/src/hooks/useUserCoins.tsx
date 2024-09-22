import { useUserCoinsContext } from 'src/contexts/userCoinsContext';
import { useCloudStorage } from './useCloudStorage';

export const useUserCoins = () => {
  const { coins, setCoins } = useUserCoinsContext();
  const { setItem } = useCloudStorage();

  const getUserCoins = () => {
    return coins;
  };

  const setUserCoins = async (coins: number) => {
    await setItem('coins', `${coins}`).catch((err) => {
      throw new Error(err);
    });

    setCoins(coins);
  };

  return { getUserCoins, setUserCoins };
};
