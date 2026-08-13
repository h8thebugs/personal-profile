import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {EnglishOnlyNotice} from 'src/app/components/english-only-notice/english-only-notice';
import {CopyToClipboard} from 'src/app/directives/copy-to-clipboard';
import {PageSeoService} from 'src/app/services/page-seo.service';
import {PostAuthor} from 'src/app/components/post-author/post-author';

@Component({
  selector: 'app-playwright',
  imports: [
    RouterLink,
    EnglishOnlyNotice,
    CopyToClipboard,
    PostAuthor
  ],
  templateUrl: './playwright.html',
  styleUrl: './playwright.scss'
})
export class Playwright {
  private readonly description = 'An introductory guide to Playwright for TypeScript. Learn how to set up automated E2E tests, handle user interactions, and apply hooks'

  constructor(private readonly pageSeo: PageSeoService) {
    this.pageSeo.update({
      title: 'Introduction to Playwright: E2E Testing Made Easy',
      description: this.description,
      path: '/posts/playwright',
      type: 'article'
    });
  }
}
