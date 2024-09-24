import { getItem, setItem, removeItem } from 'src/lib/cloudStorage';

export const useCloudStorage = () => {
  return { getItem, setItem, removeItem };
};
