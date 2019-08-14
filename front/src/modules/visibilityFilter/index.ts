import {
  FilterType, showAll,
  setVisibilityFilter, SetVisibilityFilterAction,
} from './SetVisibilityFilter';

export {FilterType, showAll, showCompleted, showActive } from './SetVisibilityFilter'

type Actions = SetVisibilityFilterAction;

export type State = {
  visibility: FilterType,
}

const init = (): State => {
  return {
    visibility: showAll(),
  }
}

export const reducer = (state: State = init(), action: Actions) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        visibility: action.payload.fileter,
      }
    default:
      return state;
  }
}

export const actionCreator = {
  setVisibilityFilter,
}
