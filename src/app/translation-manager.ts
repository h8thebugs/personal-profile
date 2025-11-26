import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationManager {
  constructor(private readonly translateService: TranslateService) {
    this.translateService.addLangs(['en', 'hu', 'ro']);
    const savedLang = localStorage.getItem('language');
    this.translateService.use(savedLang || 'en');
  }

  setLanguage(language: string) {
    switch (language) {
      case 'Magyar':
        this.translateService.use('hu');
        localStorage.setItem('language', 'hu');
        break;
      case 'Română':
        this.translateService.use('ro');
        localStorage.setItem('language', 'ro');
        break;
      default:
        this.translateService.use('en');
        localStorage.setItem('language', 'en');
        break;
    }
  }

  getCurrentLanguage(): string {
    switch (localStorage.getItem('language')) {
      case 'hu':
        return 'Magyar';
      case 'ro':
        return 'Română';
      default:
        return 'English';
    }
  }
}
