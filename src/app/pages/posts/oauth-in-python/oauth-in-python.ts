import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {CopyToClipboard} from '../../../directives/copy-to-clipboard';
import {Meta, Title} from '@angular/platform-browser';
import {EnglishOnlyNotice} from '../../../components/english-only-notice/english-only-notice';

@Component({
  selector: 'app-oauth-in-python',
  imports: [
    NgOptimizedImage,
    CopyToClipboard,
    EnglishOnlyNotice
  ],
  templateUrl: './oauth-in-python.html',
  styleUrl: './oauth-in-python.scss',
})
export class OauthInPython {
  private readonly description = 'An overview of OAUTH in non-web apps and the general data-flow of an OAUTH Client.';

  constructor(private readonly meta: Meta, private title: Title) {
    this.title.setTitle(`${title.getTitle().split("-")[0]} - OAUTH in Client Apps`)
    this.meta.updateTag(
      {
        property: 'og:title',
        content: 'OAUTH on client-side with Python',
      }, 'property="og:title"'
    );
    this.meta.updateTag({
      property: 'description',
      content: this.description
    }, 'name="description"');
  }
}
