import { useEffect } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi";
import { TodoProvider, useTodoContext } from "./Context/TodoContext";

function App() {
  const {
    todos,
    setTodos,
    text,
    setText,
    isUpdating,
    setIsUpdating,
    toDoId,
    setToDoId,
  } = useTodoContext();

  useEffect(() => {
    getAllToDo(setTodos);
  }, [setTodos]);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>My Todo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Enter your Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () => updateToDo(toDoId, text, setTodos, setText, setIsUpdating)
                : () => addToDo(text, setText, setTodos)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {todos.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setTodos)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <TodoProvider>
      <App />
    </TodoProvider>
  );
}

export default AppWrapper;
