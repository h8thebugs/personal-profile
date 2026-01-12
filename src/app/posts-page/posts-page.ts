import { AfterViewInit, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import Post from '../models/post.model';
import { Router, RouterLink } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-posts-page',
  imports: [
    TranslatePipe,
    RouterLink
  ],
  templateUrl: './posts-page.html',
  styleUrl: './posts-page.scss'
})
export class PostsPage implements AfterViewInit {
  posts: Post[] = [
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
  canonical = inject(CanonicalService);

  async onClick(link: string) {
    await this.router.navigateByUrl(link);
  }

  ngAfterViewInit(): void {
    this.canonical.setCanonical();
  }
}
