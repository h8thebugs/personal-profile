import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { EnglishOnlyNotice } from 'src/app/components/english-only-notice/english-only-notice';
import { CopyToClipboard } from 'src/app/directives/copy-to-clipboard';

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
  private readonly description = 'Integrate E2E tests written in Playwright into a pipeline, how to configure it with Angular, Spring Boot, and Github Actions.'

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
