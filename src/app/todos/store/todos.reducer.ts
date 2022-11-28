import { createReducer, on } from '@ngrx/store';
import { Todos } from './todos';
import { todosBinFetchAPISuccess, todosDeleteAPISuccess, todosFetchAPISuccess } from './todos.action';

export const initialState: ReadonlyArray<Todos> = [];

export const todoReducer = createReducer(
  initialState,
  on(todosFetchAPISuccess, (state, { allTodos }) => {
    return allTodos;
  }),
  on(todosBinFetchAPISuccess, (state, { bin }) => {
    return bin;
  }),
  on(todosDeleteAPISuccess, (state, { id }) => {
    let newState = state.filter((_) => _.id != id);
    return newState;
  })
);

