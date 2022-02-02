import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todos/todo"; 
import "./Todo.css";

const Todo = () => {
  const [currentInput, setCurrentInput] = useState("");
  const dispatch = useDispatch();
  const addCurrentTodo = (e) => {
      e.preventDefault();
      dispatch(addTodo(currentInput));
      setCurrentInput("");
  }

  return (
    <div className="container">
      <div className="add-bar">
        <span>
          <input
            type="text"
            placeholder="Enter todo..."
            className="todo-input"
            value={currentInput}
            onChange={(event) => setCurrentInput(event.target.value)}
          />
        </span>
        <span>
          <button className="todo-button" onClick={addCurrentTodo}>Add Task</button>
        </span>
      </div>
      <div></div>
    </div>
  );
};

export default Todo;
