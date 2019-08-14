import { combineReducers } from 'redux';
import * as Todos from './todos'
import * as visibilityFilter from './visibilityFilter'

export interface RootState {
  todos: Todos.State;
  visibilityFilter: visibilityFilter.State;
}

export const rootReducer = combineReducers({
  todos: Todos.reducer,
  visibilityFilter: visibilityFilter.reducer,
});

export const actionCreator = {
  todos: Todos.actionCreator,
  visibilityFilter: visibilityFilter.actionCreator,
}
