import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AcompComponent } from './acomp/acomp.component';
import { BcompComponent } from './bcomp/bcomp.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { TodoList } from './TodoList';
import { card } from './card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AcompComponent,BcompComponent,AboutComponent,CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  // selectedComponent: string = 'about'; // Default component

  // handleNavItemClick(item: string) {
  //   this.selectedComponent = item;
  // }

  bool_val = true;
  toggle() {
    this.bool_val = !this.bool_val;
  }

  // todo: TodoList[];
  // constructor() {
  // this.todo = [
  //  {id: 1, title: 'Angular', description: 'Angular 9', active: true},
  //  {id: 2, title: 'React', description: 'React 16', active: true},
  //   {id: 3, title: 'Vue', description: 'Vue 3', active: true},
  //   {id: 4, title: 'Node', description: 'Node 12', active: true},
  //   {id: 5, title: 'MongoDB', description: 'MongoDB 4', active: true}
  //   ];
  
  // }

 cards: card[];
 constructor(){
  this.cards = [
    {img:"https://media.geeksforgeeks.org/img-practice/prod/courses/504/Mobile/Other/Course_DSA_to_Dev_1720846081.webp" , title:"DSA to Dev", level:"Beginner", intrest:"Data Structures and Algorithms", refund:"100% refund"},
    {img:"https://media.geeksforgeeks.org/img-practice/prod/courses/227/Mobile/Other/Course_Backend_1720846992.webp" , title:"Backend", level:"Intermediate", intrest:"Backend Development", refund:"100% refund"},
    {img:"https://media.geeksforgeeks.org/img-practice/prod/courses/405/Mobile/Other/Course_ML_&_DS_1720846555.webp" , title:"ML & DS", level:"Advanced", intrest:"Machine Learning and Data Science", refund:"100% refund"},
    {img:"https://media.geeksforgeeks.org/img-practice/prod/courses/198/Web/Content/dsa_1723009292.webp" , title:"DSA", level:"Beginner", intrest:"Data Structures and Algorithms", refund:"100% refund"},
    {img:"https://media.geeksforgeeks.org/img-practice/prod/courses/458/Mobile/Other/Course_Tech_Int_1720846791.webp" , title:"Tech Int", level:"Intermediate", intrest:"Technical Interview", refund:"100% refund"},
    {img:"https://media.geeksforgeeks.org/img-practice/prod/courses/241/Web/Content/FSRNL_1705410152.webp" , title:"Full Stack", level:"Advanced", intrest:"Full Stack Development", refund:"100% refund"}

  ]
 }
 
}


