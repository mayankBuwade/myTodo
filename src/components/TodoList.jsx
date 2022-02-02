import React from "react";
import { useSelector } from "react-redux";

import "./TodoList.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="container">
      {todos.map((todo) => (
        <div className="todo-list-container">
          <p className="todo-list">{todo.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
