import { getItem, setItem, removeItem } from 'lib/cloudStorage';

export const useCloudStorage = () => {
  return { getItem, setItem, removeItem };
};
