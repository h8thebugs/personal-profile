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
  private readonly description = 'Step-by-step guide to Spring Boot integration testing using WireMock. Learn how to stub third-party REST APIs and mock file downloads with dynamically allocated ports.';

  constructor(private readonly meta: Meta, private title: Title) {
    this.title.setTitle(`${title.getTitle().split("-")[0]} - Spring Boot Integration Testing: Mock APIs with WireMock`);
    this.meta.updateTag(
      {
        property: 'og:title',
        content: 'Spring Boot Integration Testing: Mock APIs with WireMock',
      }, 'property="og:title"'
    );
    this.meta.updateTag({
      property: 'description',
      content: this.description
    }, 'name="description"');
  }
}
