import { AfterViewInit, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-about-page',
  imports: [
    TranslatePipe,
    NgOptimizedImage
  ],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
})
export class AboutPage implements AfterViewInit {

  private readonly description = 'The colors used on this page were inspired by the New Moon Theme. Technologies used: Angular, Typescript, GitHub';
  private readonly canonical = inject(CanonicalService);
  constructor(private readonly meta: Meta) {
    this.meta.updateTag({
      property: 'og:description',
      content: this.description
    }, 'property="og:description"');
    this.meta.updateTag({
      property: 'og:title',
      content: 'About page'
    }, 'property="og:title"');
    this.meta.updateTag({
      name: 'description',
      content: this.description
    }, 'name="description"');
  }

  ngAfterViewInit(): void {
        this.canonical.setCanonical();
    }
}
