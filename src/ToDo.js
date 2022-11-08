import ToDoListContainer from "./components/ToDoListContainer/ToDoListContainer";
import ToDOListForm from "./components/ToDoListForm/ToDOListForm";

function ToDo() {
  return (
    <div className="todo_container">
      <ToDOListForm />
      <ToDoListContainer />
    </div>
  );
}

export default ToDo;
