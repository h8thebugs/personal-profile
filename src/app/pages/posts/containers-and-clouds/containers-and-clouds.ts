import {Component} from '@angular/core';
import {EnglishOnlyNotice} from 'src/app/components/english-only-notice/english-only-notice';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {PageSeoService} from 'src/app/services/page-seo.service';
import {PostAuthor} from 'src/app/components/post-author/post-author';

@Component({
  selector: 'app-containers-and-clouds',
  imports: [
    EnglishOnlyNotice,
    NgOptimizedImage,
    RouterLink,
    PostAuthor
  ],
  templateUrl: './containers-and-clouds.html',
  styleUrl: './containers-and-clouds.scss',
})
export class ContainersAndClouds {
  private readonly description = 'Learn how modern cloud infrastructures work, how they leverage containers to scale, and what concepts are used to manage them. This article is a beginner-friendly introduction to cloud computing and containerization.';

  constructor(private readonly pageSeo: PageSeoService) {
    this.pageSeo.update({
      title: 'Containers and Clouds: A Beginner\'s Guide',
      description: this.description,
      path: '/posts/containers-and-clouds',
      type: 'article'
    });
  }
}
