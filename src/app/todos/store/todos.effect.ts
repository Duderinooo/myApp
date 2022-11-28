import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { Appstate } from 'src/app/shared/store/appstate';
import { TodosService } from '../todos.service';

import { selectTodos } from './todos.selector';
import { invokeSaveNewTodoAPI, invokeTodosAPI, invokeTodosBinAPI, invokeTodosDeleteAPI, saveNewTodoAPISucess, todosBinFetchAPISuccess, todosDeleteAPISuccess, todosFetchAPISuccess } from './todos.action';

@Injectable()
export class BooksEffect {
  constructor(
    private actions$: Actions,
    private todoService: TodosService,
    private store: Store,
    private appStore: Store<Appstate>
  ) { }

  loadAllBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeTodosAPI),
      withLatestFrom(this.store.pipe(select(selectTodos))),
      mergeMap(() => {
        return this.todoService
          .get()
          .pipe(map((data) => todosFetchAPISuccess({ allTodos: data })));
      })
    )
  );

  saveNewBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeSaveNewTodoAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.todoService.create(action.newTodo).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return saveNewTodoAPISucess({ newTodo: data });
          })
        );
      })
    );
  });

  deleteBooksAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeTodosDeleteAPI),
      switchMap((actions) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.todoService.delete(actions.id).pipe(
          map(() => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return todosDeleteAPISuccess({ id: actions.id });
          })
        );
      })
    );
  });

  
}