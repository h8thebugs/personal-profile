import { AfterViewInit, Component, ElementRef, viewChild, viewChildren } from '@angular/core';

@Component({
  selector: 'app-sunset',
  imports: [],
  templateUrl: './sunset.html',
  styleUrl: './sunset.scss'
})
export class Sunset implements AfterViewInit {
  hills = viewChildren<ElementRef<HTMLDivElement>>('hill');
  sun = viewChild<ElementRef<HTMLDivElement>>('sun');
  sunInitialPosition = 0;

  ngAfterViewInit(): void {
    this.sunInitialPosition = this.sun()?.nativeElement.offsetHeight ?? 0;
    const scrollContainer = document.getElementById('scroll-container') ?? undefined;
    scrollContainer?.addEventListener('scroll', () => this.parallax(scrollContainer?.scrollTop ?? 0))
  }

  parallax(scrollTop: number) {
    this.hills().forEach((hill, index) => {
      const offset = (3 - index) * scrollTop / 20;
      hill.nativeElement.style.transform = `translateY(${offset}px)`
    });
    const sun = this.sun();
    if (!sun) {
      return;
    }
    const offset = this.sunInitialPosition + scrollTop * 0.65;
    const opacity = 1 - offset * offset / (this.sunInitialPosition * this.sunInitialPosition * 15);
    sun.nativeElement.style.transform = `translate(-50%, ${offset}px)`;
    sun.nativeElement.style.opacity = `${opacity}`;
  }
}
