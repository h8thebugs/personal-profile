import {Component} from '@angular/core';
import {CopyToClipboard} from '../../../directives/copy-to-clipboard';
import {EnglishOnlyNotice} from '../../../components/english-only-notice/english-only-notice';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-integration-testing-and-wiremock',
  imports: [
    CopyToClipboard,
    EnglishOnlyNotice
  ],
  templateUrl: './integration-testing-and-wiremock.html',
  styleUrl: './integration-testing-and-wiremock.scss',
})
export class IntegrationTestingAndWiremock {
  private readonly description = 'My journey of drawing a test strategy using WireMock, and how I used it to serve the necessary data/files.';

  constructor(private readonly meta: Meta, private title: Title) {
    this.title.setTitle(`${title.getTitle().split("-")[0]} - Integration Testing and Wiremock`);
    this.meta.updateTag(
      {
        property: 'og:title',
        content: 'Integration Testing and Wiremock',
      }, 'property="og:title"'
    );
    this.meta.updateTag({
      property: 'description',
      content: this.description
    }, 'name="description"');
  }
}
