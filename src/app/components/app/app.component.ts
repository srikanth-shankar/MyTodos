import { Component } from '@angular/core';
import {TodosComponent} from '../todos/todos.component';

@Component({
  selector: 'my-app',
  template: `<h1>My todos</h1>
            <todos></todos>
  `
})
export class AppComponent  { name = 'Angular'; }
