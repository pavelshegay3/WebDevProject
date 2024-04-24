import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css'
})
export class BarComponent {
  query: string = '';

  @Output() searchQuery: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) {}

  onSearch() {
    this.searchQuery.emit(this.query);
    this.router.navigate(['/search', this.query]);
  }
}
