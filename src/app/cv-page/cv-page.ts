import {
  AfterViewInit,
  Component,
  ElementRef, viewChild,
  viewChildren,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-cv-page',
  imports: [
    NgOptimizedImage,
    TranslatePipe
  ],
  templateUrl: './cv-page.html',
  styleUrl: './cv-page.scss',
})
export class CvPage implements AfterViewInit {
  slideImages = viewChildren<ElementRef<HTMLImageElement>>('imageElement');
  firstSlide = viewChild.required<ElementRef<HTMLDivElement>>('slideElement');
  scrollContainer?: HTMLElement;
  slideHeight = 0;
  private readonly viewportCenter = window.innerHeight / 2;

  private readonly description = 'Personal information, work history, education and trainings.';

  constructor(private readonly meta: Meta) {
    this.meta.updateTag({
      property: 'og:description',
      content: this.description
    }, 'property="og:description"');
    this.meta.updateTag({
      property: 'og:title',
      content: 'CV'
    }, 'property="og:title"');
    this.meta.updateTag({
      name: 'description',
      content: this.description
    }, 'name="description"')
  }

  ngAfterViewInit() {
    this.scrollContainer = document.getElementById('scroll-container') ?? undefined;
    this.slideHeight = this.firstSlide().nativeElement.offsetHeight ?? 0;

    this.scrollContainer?.addEventListener('scroll', () => {
      this.blur();
      if (this.firstSlide().nativeElement.offsetWidth >= 650) {
        this.parallax()
      }
    });
  }

  parallax() {
    const scrollTop = this.scrollContainer?.scrollTop ?? 0;
    this.slideImages()
      .forEach((image, index) => {
        const offset = scrollTop * .85 - (index * this.slideHeight);
        image.nativeElement.style.marginTop = offset + 'px';
      });

  }

  blur() {
    this.slideImages().forEach((image) => {
      const slide = image.nativeElement.closest('.slide') as HTMLElement;
      if (!slide) return;
      const rect = slide.getBoundingClientRect();
      const slideCenter = rect.top + rect.height / 2;
      const distance = Math.abs(this.viewportCenter - slideCenter);
      const maxBlur = 20;
      const sensitivity = 0.03;
      const blurAmount = Math.min(maxBlur, distance * sensitivity);
      image.nativeElement.style.filter = `blur(${blurAmount < 5 ? 0 : blurAmount}px)`;
    });

  }
}
