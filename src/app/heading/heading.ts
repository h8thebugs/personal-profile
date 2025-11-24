import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownComponent } from '../dropdown-component/dropdown-component';

@Component({
  selector: 'app-heading',
  imports: [
    RouterLink,
    DropdownComponent,
    DropdownComponent
  ],
  templateUrl: './heading.html',
  styleUrl: './heading.scss',
})
export class Heading {
  options = signal(['English', 'Magyar', 'Română']);
  selectedOption = signal('English');

  changeSelection($event: string) {
    this.selectedOption.set($event);
  }
}
