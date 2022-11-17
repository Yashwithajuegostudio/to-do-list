// Title
export const TITLE = {
  addBtnTitle: "Add",
  deleteBtnTitle: "Delete",
  editBtnTitle: "Edit",
  saveBtnTitle: "Save",
  cancelBtnTitle: "Cancel",
  toDoBtnTitle: "ToDo",
  completedBtnTitle: "Complete",
  loginBtnTitle: "Login",
  searchTitle: "Search",
  allTab: "All",
  toDoTab: "ToDo",
  completedTab: "Completed",
  logoutBtnTitle: "Logout",
  deleteAlertTitle: "Are you sure want to delete?",
};
export const MESSAGE = {
  invalidUserAlertMessage: "Invalid user",
  logoutAlertMessage: "Do you want to logout",
};

// user
export const USER_ID = "user12@";

// tab Number
export const TAB_NUMBER = {
  Tab_One: 0,
  Tab_Two: 1,
  Tab_Three: 2,
};

// placeholder value
export const PLACEHOLDER_VALUE = {
  searchBtnPlaceholder: "Find your item",
};

// Route Path
export const PATH = {
  todoListPath: "/todolist",
};

export const INITIAL_ACTIVE_TAB_INDEX = 0;

// authenticated status
export const AUTHENTICATION_STATUS = {
  authenticated: "true",
  notAuthenticated: "false",
};
export const AUTH_LOCAL_STORAGE_KEY = "authenticated";

// Tab content
export const TAB_CONTENT = [
  {
    id: 0,
    title: TITLE.allTab,
  },
  {
    id: 1,
    title: TITLE.toDoTab,
  },
  {
    id: 2,
    title: TITLE.completedTab,
  },
];

// Local storage key
export const LOCAL_STORAGE_KEY = {
  authenticated: "authenticated",
  todoList: "TodoList",
};

// methods
export const METHOD = {
  GET: "GET",
  SET: "SET",
};
