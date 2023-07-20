import { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        text,
        setText,
        isUpdating,
        setIsUpdating,
        toDoId,
        setToDoId,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
