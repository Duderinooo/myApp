import { createAction, props } from '@ngrx/store';
import { Todos } from './todos';

export const invokeTodosAPI = createAction(
  '[Todo API] Invoke Todo Fetch API'
);

export const todosFetchAPISuccess = createAction(
  '[Todo API] Fetch API Success',
  props<{ allTodos:Todos[] }>()
);

export const invokeTodosBinAPI = createAction(
  '[Todo API] Invoke Todo Fetch API'
);

export const todosBinFetchAPISuccess = createAction(
  '[Todo API] Fetch Bin API Success',
  props<{ bin:Todos[] }>()
);

export const invokeSaveNewTodoAPI = createAction(
  '[Todo API] Inovke save new todo api',
  props<{ newTodo: Todos }>()
);

export const saveNewTodoAPISucess = createAction(
  '[Todo API] save new todo api success',
  props<{ newTodo: Todos }>()
);

export const invokeTodosDeleteAPI = createAction('[Todos API] invoke delete todo API', props<{ id: number }>())

export const todosDeleteAPISuccess = createAction('[Todos API] delete todo success', props<{id:number}>())