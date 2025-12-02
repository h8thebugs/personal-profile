import {
  AfterViewInit,
  Component,
  ElementRef, viewChild,
  viewChildren,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-cv-page',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './cv-page.html',
  styleUrl: './cv-page.scss',
})
export class CvPage implements AfterViewInit {
  slideImages = viewChildren<ElementRef<HTMLImageElement>>('imageElement');
  firstSlide = viewChild.required<ElementRef<HTMLDivElement>>('slideElement');
  scrollContainer?: HTMLElement;
  slideHeight = 0;

  ngAfterViewInit() {
    this.scrollContainer = document.getElementById('scroll-container') ?? undefined;
    this.slideHeight = this.firstSlide().nativeElement.offsetHeight ?? 0;
    if (this.firstSlide().nativeElement.offsetWidth > 800) {
      this.scrollContainer?.addEventListener('scroll', () => this.onScroll());
    }
  }

  onScroll() {
    const scrollTop = this.scrollContainer?.scrollTop ?? 0;
    this.slideImages()
      .forEach((image, index) => {
        const offset = scrollTop * .85 - (index * this.slideHeight);
        image.nativeElement.style.marginTop = offset + 'px';
      });

  }

  isElementVisible(elementRef: ElementRef): boolean {
    const rect = elementRef.nativeElement.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
