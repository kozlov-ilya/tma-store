import { getItem, setItem, removeItem } from 'src/lib/cloudStorage';
import { useUserCoinsContext } from 'src/contexts/userCoinsContext';

export const useCloudStorage = () => {
  const { setCoins } = useUserCoinsContext();

  const initCloudStorage = async () => {
    const coins = await getItem('coins').then((res) => res);

    if (!coins) {
      await setItem('coins', '0');
      setCoins(0);

      return;
    }

    setCoins(+coins);
  };

  return { getItem, setItem, removeItem, initCloudStorage };
};
