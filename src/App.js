import "./App.css";
import ToDoList from "./pages/ToDoList/ToDoList";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PATH } from "./utils/constant";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PATH.todoListPath} element={<ToDoList />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
