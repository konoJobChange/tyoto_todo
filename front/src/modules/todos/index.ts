import { addTodo, AddTodoAction } from './AddTodo';
import { toggleTodo, ToggleTodoAction } from './ToggleTodo';

type Actions =  AddTodoAction | ToggleTodoAction;

export interface State {
  todos: {
    id: number;
    text: string;
    completed: boolean;
  }[];
}

const init = (): State => {
  return {
    todos: [],
  }
}

export const reducer = (state: State = init(), action: Actions) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          {
            // 既存の配列に新しいものを追加
            id: state.todos.length,
            text: action.payload.text,
            completed: false,
          }
        ]
      };

    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map((e) => {
          return e.id !== action.payload.id
            ? e
            : {
              // 対象のidだけcompletedを反転
              ...e,
              completed: !e.completed,
            }
        })
      };

    default:
      return state;
  }
}

export const actionCreator = {
  addTodo,
  toggleTodo,
}
