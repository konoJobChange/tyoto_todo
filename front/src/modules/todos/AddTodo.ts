import { Action } from 'redux';

// Todoを追加するときに必要なのはTodoの内容くらい
export interface AddTodoPayload {
  text: string;
}

export interface AddTodoAction extends Action {
  type: 'ADD_TODO';
  payload: AddTodoPayload;
}

export const addTodo = (payload: AddTodoPayload): AddTodoAction => {
  return {
    payload,
    type: 'ADD_TODO'
  }
}
