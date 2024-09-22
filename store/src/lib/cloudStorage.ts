import WebApp from '@twa-dev/sdk';

export type GetItemFunction = (key: string) => Promise<string | undefined>;
export type SetItemFunction = (key: string, value: string) => Promise<void>;
export type RemoveItemFunction = (key: string) => Promise<void>;

const cloudStorage = WebApp.CloudStorage;

export const getItem: GetItemFunction = (key) => {
  return new Promise((resolve, reject) => {
    cloudStorage.getItem(key, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    });
  });
};

export const setItem: SetItemFunction = (key, value) => {
  return new Promise((resolve, reject) => {
    cloudStorage.setItem(key, value, (error, result) => {
      if (!error && result) {
        resolve();
      } else {
        reject(error);
      }
    });
  });
};

export const removeItem: RemoveItemFunction = (key) => {
  return new Promise((resolve, reject) => {
    cloudStorage.removeItem(key, (error, result) => {
      if (!error && result) {
        resolve();
      } else {
        reject(error);
      }
    });
  });
};
