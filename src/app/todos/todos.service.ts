import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todos } from './store/todos';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) { }
  
  get() {
    return this.http.get<Todos[]>('http://localhost:3000/todos');
  }

  create(payload: Todos) {
    return this.http.post<Todos>('http://localhost:3000/todos', payload);
  }


  getBin() {
    return this.http.get<Todos[]>('http://localhost:3000/bin');
  }

  delete(id: number) {
      return this.http.delete(`http://localhost:3000/todos/${id}`);
    }
}
