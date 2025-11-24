import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { CvPage } from './cv-page/cv-page';

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
  }
];
