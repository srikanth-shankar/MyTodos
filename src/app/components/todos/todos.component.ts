import {Component} from '@angular/core';
import {TodoService} from '../../services/todo.service'

@Component({
    selector: 'todos',
  template: `
  <div>
  <div *ngIf="errMsg">
    <div class="alert alert-danger">{{errMsg}}</div>
  </div>

  <div *ngIf="sucMsg">
    <div class="alert alert-danger">{{errMsg}}</div>
  </div>


  </div>
  <div>
    <input type="text" class="form-control" [(ngModel)]="newTodo" (keyup.enter)="addTodo()"/>
    <br/>
  </div>
  
  <ul class="list-group">
    <li *ngFor="let todo of todos" class="list-group-item">
       <a href="#" (dblclick)="removeTodo(todo)">{{todo}}</a>
    </li>
  </ul>
  <button class="btn btn-default" (click)="ResetTodos()">Reset</button>
  `,
  providers: [TodoService]
})

export class TodosComponent{
    todos:any;
    newTodo:any;
    errMsg:string;
    sucMsg:string;

    constructor(private todoService : TodoService){
        this.todos=todoService.getTodos();
    }

    ResetTodos(){
        this.todoService.resetTodo();
    }

    addTodo(){
        if(!this.newTodo || this.newTodo.length<3)
            this.errMsg = 'lenght must be >3';
        else
            //this.todos.push(this.newTodo);
            this.todoService.addTodo(this.newTodo);
    }
    removeTodo(todoitm){
        //this.todos.splice(this.todos.indexOf(todoitm),1);
        this.todoService.removeTodo(this.newTodo);
    }
}