import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Appstate } from 'src/app/shared/store/appstate';
import { invokeTodosAPI } from '../store/todos.action';
import { selectTodos } from '../store/todos.selector';

@Component({
  selector: 'app-bin',
  templateUrl: './bin.component.html',
  styleUrls: ['./bin.component.css']
})
export class BinComponent implements OnInit {

  constructor(private store: Store, private appStore: Store<Appstate>) { }

  todos$ = this.store.pipe(select(selectTodos));

  ngOnInit(): void {
    this.store.dispatch(invokeTodosAPI());
  }

}

