import { Action } from 'redux';

interface ShowAll {
  type: 'SHOW_ALL',
}

interface ShowCompleted {
  type: 'SHOW_COMPLETED',
}

interface ShowActive {
  type: 'SHOW_ACTIVE',
}

export type FilterType = ShowAll | ShowCompleted | ShowActive;

export const showAll = (): FilterType => {
  return {
    type: 'SHOW_ALL',
  }
}

export const showCompleted = (): FilterType => {
  return {
    type: 'SHOW_COMPLETED',
  }
}

export const showActive = (): FilterType => {
  return {
      type: 'SHOW_ACTIVE',
  }
}

// フィルターをセットして、プレゼンテーション層で見え方の調整をする
export interface SetVisibilityFilterPayload {
  fileter: FilterType
}

export interface SetVisibilityFilterAction extends Action {
  type: 'SET_VISIBILITY_FILTER';
  payload: SetVisibilityFilterPayload;
}

export const setVisibilityFilter = (payload: SetVisibilityFilterPayload): SetVisibilityFilterAction => {
  return {
    payload,
    type: 'SET_VISIBILITY_FILTER',
  }
}
