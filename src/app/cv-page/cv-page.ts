import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-cv-page',
  imports: [
    TranslatePipe
  ],
  templateUrl: './cv-page.html',
  styleUrl: './cv-page.scss',
})
export class CvPage {
  slides = [
    { title: 'Slide 1', content: 'Content 1' },
    { title: 'Slide 2', content: 'Content 2' },
    // Add more slides
  ];
  currentSlide = 0;

  getBgTransform(i: number) {
    const offset = (i - this.currentSlide) * 40; // slower movement
    return `translateX(${offset}%)`;
  }
  getFgTransform(i: number) {
    const offset = (i - this.currentSlide) * 100; // faster movement
    return `translateX(${offset}%)`;
  }
  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
}
