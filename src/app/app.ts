import { Component, ElementRef, viewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Heading } from './heading/heading';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Heading],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 scrollContainer = viewChild.required<ElementRef<HTMLDivElement>>('scrollContainer');
  constructor(private readonly router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollContainer().nativeElement.scrollTo({ top: 0})
      }
    })
  }
}
