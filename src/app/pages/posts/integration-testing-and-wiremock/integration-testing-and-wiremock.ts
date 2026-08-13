import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {CopyToClipboard} from '../../../directives/copy-to-clipboard';
import {EnglishOnlyNotice} from '../../../components/english-only-notice/english-only-notice';
import {PageSeoService} from 'src/app/services/page-seo.service';
import {PostAuthor} from 'src/app/components/post-author/post-author';

@Component({
  selector: 'app-integration-testing-and-wiremock',
  imports: [
    CopyToClipboard,
    EnglishOnlyNotice,
    RouterLink,
    PostAuthor
  ],
  templateUrl: './integration-testing-and-wiremock.html',
  styleUrl: './integration-testing-and-wiremock.scss',
})
export class IntegrationTestingAndWiremock {
  private readonly description = 'Step-by-step guide to Spring Boot integration testing using WireMock. Learn how to stub third-party REST APIs and mock file downloads with dynamically allocated ports.';

  constructor(private readonly pageSeo: PageSeoService) {
    this.pageSeo.update({
      title: 'Spring Boot Integration Testing: Mock APIs with WireMock',
      description: this.description,
      path: '/posts/integration-testing-and-wiremock',
      type: 'article'
    });
  }
}
