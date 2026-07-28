import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Meta, Title} from '@angular/platform-browser';
import {EnglishOnlyNotice} from 'src/app/components/english-only-notice/english-only-notice';
import {CopyToClipboard} from 'src/app/directives/copy-to-clipboard';

@Component({
  selector: 'app-performance-enhance-spring',
  imports: [
    NgOptimizedImage,
    EnglishOnlyNotice,
    CopyToClipboard
  ],
  templateUrl: './performance-enhance-spring.html',
  styleUrl: './performance-enhance-spring.scss',
})
export class PerformanceEnhanceSpring {
  private readonly description = 'Sharing some of my experience regarding how to how to boost legacy Spring Boot app performance. Discover practical, low-risk tips for caching, Java parallel streams, CI/CD, and black-box testing.';

  constructor(private readonly meta: Meta, private title: Title) {
    this.title.setTitle(`${title.getTitle().split("-")[0]} - How to Enhance Performance in Legacy Spring Boot Apps`)
    this.meta.updateTag(
      {
        property: 'og:title',
        content: 'How to Enhance Performance in Legacy Spring Boot Apps'
      }, 'property="og:title"'
    );
    this.meta.updateTag({
      property: 'description',
      content: this.description
    }, 'name="description"');
  }
}
