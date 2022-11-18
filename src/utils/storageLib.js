// useLocalStorage custom hooks

import { METHOD } from "./constant";

export const useLocalStorageData = () => {
  const localStorageUsage = (method, key, value) => {
    if (method === METHOD.GET) {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } else if (method === METHOD.SET) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.clear();
    }
  };

  return [localStorageUsage];
};
