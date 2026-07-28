import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {EnglishOnlyNotice} from 'src/app/components/english-only-notice/english-only-notice';
import {CopyToClipboard} from 'src/app/directives/copy-to-clipboard';

@Component({
  selector: 'app-playwright-in-action',
  imports: [
    NgOptimizedImage,
    RouterLink,
    EnglishOnlyNotice,
    CopyToClipboard
  ],
  templateUrl: './playwright-in-action.html',
  styleUrl: './playwright-in-action.scss'
})
export class PlaywrightInAction {
  private readonly description = 'Learn how to configure Playwright E2E tests for Spring Boot and Angular. Bypass complex OAuth login steps using profiles, and automatically run it with GitHub Actions CI pipeline.'

  constructor(private readonly meta: Meta, private title: Title) {
    this.title.setTitle(`${title.getTitle().split("-")[0]} - Playwright in Action`);
    this.meta.updateTag({
      property: 'og:title',
      content: 'An introduction to Playwright'
    }, 'property="og:title"');
    this.meta.updateTag({
      name: 'description',
      content: this.description
    }, 'name="description"')
  }
}
