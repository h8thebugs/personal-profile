import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-playwright-in-action',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './playwright-in-action.html',
  styleUrl: './playwright-in-action.scss'
})
export class PlaywrightInAction {

}
