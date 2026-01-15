import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Heading } from './components/heading/heading';
import { CanonicalService } from './services/canonical.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Heading],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 scrollContainer = viewChild.required<ElementRef<HTMLDivElement>>('scrollContainer');
 private readonly canonicalService = inject(CanonicalService);
  constructor(private readonly router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollContainer().nativeElement.scrollTo({ top: 0})
        this.canonicalService.setCanonical();
      }
    })
  }
}
