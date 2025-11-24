import { Component, HostListener, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-dropdown-component',
  imports: [],
  templateUrl: './dropdown-component.html',
  styleUrl: './dropdown-component.scss',
})
export class DropdownComponent {
  options = input<string[]>([]);
  selectedOption = input<string>('');
  selectionChanged = output<string>();

  isOpen = signal(false);

  toggleDropdown() {
    this.isOpen.set(!this.isOpen());
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('app-dropdown-component')) {
      this.isOpen.set(false);
    }
  }

  onOptionSelected(option: string) {
    this.selectionChanged.emit(option);
    this.isOpen.set(false);
  }
}
