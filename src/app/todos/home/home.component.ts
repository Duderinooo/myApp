import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { Appstate } from 'src/app/shared/store/appstate';
import { selectTodos } from '../store/todos.selector';
import { invokeTodosAPI, invokeTodosDeleteAPI } from '../store/todos.action';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store, private appStore: Store<Appstate>) {}
  idToDelete: number = 0;

  todos$ = this.store.pipe(select(selectTodos));


  ngOnInit(): void {
   

    this.store.dispatch(invokeTodosAPI());
  }

  delete(id: number) {
    console.log(id)
    this.store.dispatch(
      invokeTodosDeleteAPI({
        id: id,
      })
    );
    let apiStatus$ = this.appStore.pipe(select(selectAppState));
    apiStatus$.subscribe((apState) => {
      if (apState.apiStatus == 'success') {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
      }
    });
  }


}
