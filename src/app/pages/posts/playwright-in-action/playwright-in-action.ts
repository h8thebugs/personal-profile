import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {EnglishOnlyNotice} from 'src/app/components/english-only-notice/english-only-notice';
import {CopyToClipboard} from 'src/app/directives/copy-to-clipboard';
import {PageSeoService} from 'src/app/services/page-seo.service';
import {PostAuthor} from 'src/app/components/post-author/post-author';

@Component({
  selector: 'app-playwright-in-action',
  imports: [
    NgOptimizedImage,
    RouterLink,
    EnglishOnlyNotice,
    CopyToClipboard,
    PostAuthor
  ],
  templateUrl: './playwright-in-action.html',
  styleUrl: './playwright-in-action.scss'
})
export class PlaywrightInAction {
  private readonly description = 'Learn how to configure Playwright E2E tests for Spring Boot and Angular. Bypass complex OAuth login steps using profiles, and automatically run it with GitHub Actions CI pipeline.'

  constructor(private readonly pageSeo: PageSeoService) {
    this.pageSeo.update({
      title: 'Playwright in Action',
      description: this.description,
      path: '/posts/playwright-in-action',
      type: 'article'
    });
  }
}
