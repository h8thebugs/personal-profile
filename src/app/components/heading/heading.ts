import { Component, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownComponent } from 'src/app/components/dropdown-component/dropdown-component';
import { TranslationManager } from 'src/app/translation-manager';
import { TranslatePipe } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-heading',
  imports: [
    RouterLink,
    DropdownComponent,
    DropdownComponent,
    TranslatePipe,
    NgOptimizedImage
  ],
  templateUrl: './heading.html',
  styleUrl: './heading.scss',
})
export class Heading {
  languageOptions = signal(['English', 'Magyar', 'Română']);
  selectedLanguage: WritableSignal<string>;

  constructor(private readonly translationManager: TranslationManager) {
    this.selectedLanguage = signal(translationManager.getCurrentLanguage());
  }

  changeSelection($event: string) {
    this.selectedLanguage.set($event);
    this.translationManager.setLanguage($event);
  }
}
