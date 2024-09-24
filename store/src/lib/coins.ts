import { getItem, setItem } from './cloudStorage';

export const fetchUserCoins = async () => {
  try {
    const userCoins = await getItem('coins');

    if (userCoins === undefined) return null;

    return +userCoins;
  } catch {
    throw new Error('Error fetching transaction-history');
  }
};

export const pushUserCoins = async (coins: number) => {
  try {
    await setItem('coins', `${coins}`);
  } catch {
    throw new Error('Error setting transaction-history');
  }
};
