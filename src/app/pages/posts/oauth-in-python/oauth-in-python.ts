import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {CopyToClipboard} from '../../../directives/copy-to-clipboard';
import {EnglishOnlyNotice} from '../../../components/english-only-notice/english-only-notice';
import {PageSeoService} from 'src/app/services/page-seo.service';

@Component({
  selector: 'app-oauth-in-python',
  imports: [
    NgOptimizedImage,
    CopyToClipboard,
    EnglishOnlyNotice,
    RouterLink
  ],
  templateUrl: './oauth-in-python.html',
  styleUrl: './oauth-in-python.scss',
})
export class OauthInPython {
  private readonly description = 'An overview of OAUTH in non-web apps and the general data-flow of an OAUTH Client.';

  constructor(private readonly pageSeo: PageSeoService) {
    this.pageSeo.update({
      title: 'OAuth in Client Apps',
      description: this.description,
      path: '/posts/oauth-in-python',
      type: 'article'
    });
  }
}
