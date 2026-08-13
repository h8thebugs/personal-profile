import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from './canonical.service';

export interface PageSeo {
  title: string;
  description: string;
  path: string;
  type?: 'article' | 'website';
}

@Injectable({ providedIn: 'root' })
export class PageSeoService {
  private readonly siteUrl = 'https://jakabszilard.work';

  constructor(
    private readonly meta: Meta,
    private readonly title: Title,
    private readonly canonical: CanonicalService,
  ) {}

  update({ title, description, path, type = 'website' }: PageSeo) {
    const url = `${this.siteUrl}${path}`;

    this.title.setTitle(`Jakab Szilárd - ${title}`);
    this.canonical.setCanonical(url);
    this.updateTag('description', description);
    this.updateTag('og:title', title, 'property');
    this.updateTag('og:description', description, 'property');
    this.updateTag('og:type', type, 'property');
    this.updateTag('og:url', url, 'property');
    this.updateTag('twitter:card', 'summary');
    this.updateTag('twitter:title', title);
    this.updateTag('twitter:description', description);
  }

  private updateTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
    this.meta.updateTag({ [attribute]: name, content }, `${attribute}="${name}"`);
  }
}
