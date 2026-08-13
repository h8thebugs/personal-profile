import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from '@angular/router';
import {EnglishOnlyNotice} from 'src/app/components/english-only-notice/english-only-notice';
import {CopyToClipboard} from 'src/app/directives/copy-to-clipboard';
import {PageSeoService} from 'src/app/services/page-seo.service';

@Component({
  selector: 'app-performance-enhance-spring',
  imports: [
    NgOptimizedImage,
    EnglishOnlyNotice,
    CopyToClipboard,
    RouterLink
  ],
  templateUrl: './performance-enhance-spring.html',
  styleUrl: './performance-enhance-spring.scss',
})
export class PerformanceEnhanceSpring {
  private readonly description = 'Sharing some of my experience regarding how to how to boost legacy Spring Boot app performance. Discover practical, low-risk tips for caching, Java parallel streams, CI/CD, and black-box testing.';

  constructor(private readonly pageSeo: PageSeoService) {
    this.pageSeo.update({
      title: 'How to Enhance Performance in Legacy Spring Boot Apps',
      description: this.description,
      path: '/posts/legacy-spring-boot-performance',
      type: 'article'
    });
  }
}
