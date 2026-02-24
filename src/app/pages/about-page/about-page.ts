import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {NgOptimizedImage} from '@angular/common';
import {Meta, Title} from '@angular/platform-browser';
import {CopyToClipboard} from '../../directives/copy-to-clipboard';

@Component({
  selector: 'app-about-page',
  imports: [
    TranslatePipe,
    NgOptimizedImage,
    CopyToClipboard
  ],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
})
export class AboutPage {

  private readonly description = 'The colors used on this page were inspired by the New Moon Theme. Technologies used: Angular, Typescript, GitHub';

  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.title.setTitle(`${title.getTitle().split("-")[0]} - About page`)
    this.meta.updateTag({
      property: 'og:title',
      content: 'About page'
    }, 'property="og:title"');
    this.meta.updateTag({
      name: 'description',
      content: this.description
    }, 'name="description"');
  }
}
