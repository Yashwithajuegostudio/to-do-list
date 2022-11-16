import "./App.css";
import ToDoList from "./pages/ToDoList/ToDoList";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Path } from "./utils/constant";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={Path.todoListPath} element={<ToDoList />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
