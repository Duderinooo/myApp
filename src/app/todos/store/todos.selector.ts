import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Bin } from './bin';
import { Todos } from './todos';

export const selectTodos = createFeatureSelector<Todos[]>('mytodos');

export const selectTodoById = (todoID: number) =>
  createSelector(selectTodos, (todos: Todos[]) => {
    var todoByID = todos.filter((_) => _.id == todoID);
    if (todoByID.length == 0) {
      return null;
    }
    return todoByID[0];
  });
