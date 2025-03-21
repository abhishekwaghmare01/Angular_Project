import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AcompComponent } from './acomp/acomp.component';
import { BcompComponent } from './bcomp/bcomp.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { TodoList } from './TodoList';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AcompComponent,BcompComponent,AboutComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Batch2Pro';
  selectedComponent: string = 'about'; // Default component

  handleNavItemClick(item: string) {
    this.selectedComponent = item;
  }

  bool_val = true;
  toggle() {
    this.bool_val = !this.bool_val;
  }

  todo: TodoList[];
  constructor() {
  this.todo = [
   {id: 1, title: 'Angular', description: 'Angular 9', active: true},
   {id: 2, title: 'React', description: 'React 16', active: true},
    {id: 3, title: 'Vue', description: 'Vue 3', active: true},
    {id: 4, title: 'Node', description: 'Node 12', active: true},
    {id: 5, title: 'MongoDB', description: 'MongoDB 4', active: true}
    ];
  
  }

}


