import "./App.css";
import ToDoList from "./pages/ToDoList/ToDoList";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/todolist" element={<ToDoList />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
