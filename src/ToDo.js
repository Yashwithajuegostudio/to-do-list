import { useState } from "react";
import ToDoListContainer from "./components/ToDoListContainer/ToDoListContainer";
import ToDOListForm from "./components/ToDoListForm/ToDOListForm";

function ToDo() {
  const [todos, setTodos] = useState([
    { id: 1, task: "task 1", completed: false },
    { id: 2, task: "task 2", completed: true },
  ]);

  const create = (newTodo) => {
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const update = (id, updtedTask) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updtedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const todosList = todos.map((todo) => (
    <ToDOListForm
      toggleComplete={toggleComplete}
      update={update}
      remove={remove}
      key={todo.id}
      todo={todo}
    />
  ));
  return (
    <div className="todo_container">
      < />
      <ToDoListContainer />
    </div>
  );
}

export default ToDo;
