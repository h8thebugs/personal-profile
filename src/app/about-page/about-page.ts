import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  imports: [
    TranslatePipe,
    NgOptimizedImage
  ],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
})
export class AboutPage {

  constructor(private readonly meta: Meta) {
    this.meta.updateTag({
      property: 'og:description',
      content: 'The colors used on this page were inspired by the New Moon Theme. Technologies used: Angular, Typescript, GitHub'
    }, 'property="og:description"');
    this.meta.updateTag({
      property: 'og:title',
      content: 'About page'
    }, 'property="og:title"');
  }
}
