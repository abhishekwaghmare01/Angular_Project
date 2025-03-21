import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-bcomp',
  imports: [CommonModule],
  templateUrl: './bcomp.component.html',
  styleUrl: './bcomp.component.css'
})
export class BcompComponent {
  @Output() navItemClicked = new EventEmitter<string>();

  onNavItemClick(event: Event, item: string) {
    // Added event param
    event.preventDefault(); // Prevent default anchor behavior
    this.navItemClicked.emit(item);
  }
}
