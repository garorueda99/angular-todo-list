import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todos';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos!: Todo[];
  constructor() {}

  ngOnInit(): void {
    this.todos = [
      { id: 1, title: 'Todo One', completed: false },
      { id: 2, title: 'Todo Two', completed: true },
      { id: 3, title: 'Todo Three', completed: false },
    ];
  }
}
