import { combineReducers } from 'redux';

const ADD_TODO = "ADD_TODO";
const UPDATE_TODO = 'UPDATE_TODO';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}

export function updateTodo(todo) {
    return {
        type: UPDATE_TODO,
        todo,
    }
}

const defaultTodos = [
  {
    name: "Learn React",
    isDone: false,
  },
];

function todos(state = defaultTodos, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          name: action.todo,
          isDone: false,
        },
      ];
    case UPDATE_TODO:
        const todo = state.find(t => action.todo === t.name);
        const todos = state.filter(t => action.todo !== t.name);
        return [
            ...todos,
            {
                ...todo,
                isDone: !todo.isDone,
            }
        ]
    default:
      return state;
  }
}


const todoApp = combineReducers({
    todos
  });
  
  export default todoApp;