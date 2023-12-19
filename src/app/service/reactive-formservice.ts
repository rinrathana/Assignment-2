import { Injectable } from '@angular/core';
import { Todo } from '../interface/todo';

@Injectable({
  providedIn: 'root',
})
export class ReactiveFormService {
  todoList: Todo[] = [];

  constructor() {}

  addTodoList(data: Todo) {
    this.todoList.push(data);
  }

  getTodoList() {
    return this.todoList;
  }
  
}

