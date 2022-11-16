// get TodoListObject from local storage

export const getToDoListObjectFromStorage = () => {
  const data = localStorage.getItem("TodoList");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
