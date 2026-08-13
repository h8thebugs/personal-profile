import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {NgOptimizedImage} from '@angular/common';
import {CopyToClipboard} from '../../directives/copy-to-clipboard';
import {PageSeoService} from 'src/app/services/page-seo.service';

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

  constructor(private readonly pageSeo: PageSeoService) {
    this.pageSeo.update({
      title: 'About',
      description: this.description,
      path: '/about'
    });
  }
}
