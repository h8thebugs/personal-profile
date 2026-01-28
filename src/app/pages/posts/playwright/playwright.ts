import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { EnglishOnlyNotice } from 'src/app/components/english-only-notice/english-only-notice';
import { CopyToClipboard } from 'src/app/directives/copy-to-clipboard';

@Component({
  selector: 'app-playwright',
  imports: [
    RouterLink,
    EnglishOnlyNotice,
    CopyToClipboard
  ],
  templateUrl: './playwright.html',
  styleUrl: './playwright.scss'
})
export class Playwright {
  private readonly description = 'Playwright core capabilities, advantages and challenges of E2E testing, and how it is handled in this framework'

  constructor(private readonly meta: Meta) {
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
