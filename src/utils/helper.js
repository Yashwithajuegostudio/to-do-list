// get TodoListObject from local storage

export const getToListObjectFromStorage = () => {
  const data = localStorage.getItem("TodoList");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
