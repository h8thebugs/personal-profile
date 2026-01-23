import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { PostsPage } from './pages/posts-page/posts-page';
import { Playwright } from './pages/posts/playwright/playwright';
import { PlaywrightInAction } from './pages/posts/playwright-in-action/playwright-in-action';
import { AboutPage } from 'src/app/pages/about-page/about-page';
import { CvPage } from 'src/app/pages/cv-page/cv-page';
import { PerformanceEnhanceSpring } from 'src/app/pages/posts/performance-enhance-spring/performance-enhance-spring';

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
  },
  {
    path: 'posts/legacy-spring-boot-performance',
    component: PerformanceEnhanceSpring
  }
];
