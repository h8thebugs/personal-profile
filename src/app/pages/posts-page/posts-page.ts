import {Component, inject} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import Post from 'src/app/models/post.model';
import {Router, RouterLink} from '@angular/router';
import {PageSeoService} from 'src/app/services/page-seo.service';

@Component({
  selector: 'app-posts-page',
  imports: [
    TranslatePipe,
    RouterLink
  ],
  templateUrl: './posts-page.html',
  styleUrl: './posts-page.scss'
})
export class PostsPage {
  posts: Post[] = [
    {
      title: "Containers and Clouds",
      description: 'Learn how modern cloud infrastructures work, how they leverage containers to scale, and what concepts are used to manage them. This article is a beginner-friendly introduction to cloud computing and containerization.',
      keywords: ['docker', 'container', 'kubernetes', 'cloud', 'infrastructure'],
      url: "/posts/containers-and-clouds"
    },
    {
      title: 'OAUTH on client-side with Python',
      description: 'An overview of OAUTH in non-web apps and the general data-flow of an OAUTH Client.',
      keywords: ['OAUTH', 'Security', 'CLI', 'Python'],
      url: '/posts/oauth-in-python',
    },
    {
      title: 'Integration testing And WireMock',
      description: 'My journey of drawing a test strategy using WireMock, and how I used it to serve the necessary data/files.',
      keywords: ['Spring Boot', 'Backend', 'Testing', 'Integration tests', 'WireMock', 'Spring Cloud Contract Stub Runner'],
      url: '/posts/integration-testing-and-wiremock',
    },
    {
      title: 'Enhance Performance in Legacy Spring Boot Apps',
      description: 'Sharing some of my experience regarding how to take over legacy applications, and what can one do to improve their performance',
      keywords: ['Spring Boot', 'Backend', 'Performance Optimization', 'Caching', 'CI/CD'],
      url: '/posts/legacy-spring-boot-performance'
    },
    {
      title: 'Playwright',
      description: 'An introduction to Playwright highlighting it\'s core features, why I chose it, how I used it with an Angular application',
      keywords: ['Angular', 'E2E Tests', 'Playwright', 'Frontend'],
      url: "/posts/playwright"
    },
    {
      title: 'Playwright in Action',
      description: 'A guide on how to integrate Playwright into a CI/CD pipeline using Github Actions with an Angular Frontend and Spring Boot Backend',
      keywords: ['E2E Tests', 'Playwright', 'DevOps', 'CI/CD', 'Github Actions', 'Angular', 'Spring Boot'],
      url: "/posts/playwright-in-action"
    }
  ];
  router = inject(Router);
  private readonly description = 'Posts, opinions, tech guides about programming and web development. From a developer, to developers.'

  constructor(private readonly pageSeo: PageSeoService) {
    this.pageSeo.update({
      title: 'Posts and Guides',
      description: this.description,
      path: '/posts'
    });
  }

  async onClick(link: string) {
    await this.router.navigateByUrl(link);
  }
}
