import { Injectable } from '@angular/core';
import {of} from 'rxjs'
import {Todo} from '../model/Todo'
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  todos: Todo[];
  constructor() {
    this.todos =[
      {
        id:'111',
        title: 'learn C++',
        isCompleted: true,
        data: new Date(),
      },
      {
        id:'112',
        title: 'learn C',
        isCompleted: true,
        data: new Date(),
      },
      {
        id:'113',
        title: 'learn React',
        isCompleted: true,
        data: new Date(),
      },
      {
        id:'114',
        title: 'learn Angular',
        isCompleted: false,
        data: new Date(),
      },
    ];
   }

   getTodos(){
     return of(this.todos);
   }

   addTodo(todo: Todo){
    this.todos.push(todo)
   }

   changeStatus(todo : Todo){
     this.todos.map( singleTodo =>{
       if(singleTodo.id ==todo.id){
         todo.isCompleted = !todo.isCompleted;
       }
     } )
   }

   deleteTodo(todo: Todo){
     const indexofTodo = this.todos.findIndex(
       (currentObj) => currentObj.id === todo.id
     )
     this.todos.splice(indexofTodo, 1);
   }
}
