import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { Meta } from '@angular/platform-browser';
import { EnglishOnlyNotice } from 'src/app/components/english-only-notice/english-only-notice';

@Component({
  selector: 'app-performance-enhance-spring',
  imports: [
    NgOptimizedImage,
    EnglishOnlyNotice
  ],
  templateUrl: './performance-enhance-spring.html',
  styleUrl: './performance-enhance-spring.scss',
})
export class PerformanceEnhanceSpring {
  private readonly description = 'Sharing some of my experience regarding how to take over legacy Spring Boot applications, and what can one do to improve their performance';
  constructor(private readonly meta: Meta) {
    this.meta.updateTag(
      {
        property: 'og:title',
        content: 'Enhance Performance in Legacy Spring Boot Apps'
      }, 'property="og:title"'
    );
    this.meta.updateTag({
      property: 'description',
      content: this.description
    }, 'name="description"');
  }
}
