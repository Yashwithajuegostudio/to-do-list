// get TodoListObject from local storage

import { LOCAL_STORAGE_KEY } from "./constant";

export const getToDoListObjectFromStorage = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY.todoList);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
