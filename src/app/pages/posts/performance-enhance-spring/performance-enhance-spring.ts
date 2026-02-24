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
  private readonly description = 'Sharing some of my experience regarding how to take over legacy Spring Boot applications, and what can one do to improve their performance';

  constructor(private readonly meta: Meta, private title: Title) {
    this.title.setTitle(`${title.getTitle().split("-")[0]} - Performance in legacy apps`)
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
