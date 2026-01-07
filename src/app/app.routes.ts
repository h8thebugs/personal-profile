import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { CvPage } from './cv-page/cv-page';
import { PostsPage } from './posts-page/posts-page';
import { Playwright } from './posts/playwright/playwright';
import { PlaywrightInAction } from './posts/playwright-in-action/playwright-in-action';

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'about',
    component: AboutPage
  },
  {
    path: 'cv',
    component: CvPage
  },
  {
    path: 'posts',
    component: PostsPage,
  },
  {
    path: 'posts/playwright',
    component: Playwright,
  },
  {
    path: 'posts/playwright-in-action',
    component: PlaywrightInAction
  }
];
