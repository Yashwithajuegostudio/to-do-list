// useLocalStorage custom hooks

import { METHOD } from "./constant";

export const useLocalStorageData = () => {
  const localStorageUsage = (method, key, value) => {
    if (method === METHOD.GET) {
      return JSON.parse(localStorage.getItem(key));
    } else if (method === METHOD.SET) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.clear();
    }
  };

  return [localStorageUsage];
};
