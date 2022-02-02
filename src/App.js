import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import todoApp from "./store/todos/todo";

const store = createStore(todoApp)

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Todo />
        <TodoList />
      </Provider>
    </React.StrictMode>
  );
};

export default App;
