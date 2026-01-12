import { Meta } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CanonicalService {
  constructor(private readonly meta: Meta) {}

  setCanonical(url?: string) {
    const canonicalUrl = url ?? globalThis.location.origin + globalThis.location.pathname;
    this.meta.updateTag({
      rel: 'canonical',
      href: canonicalUrl
    });
  }
}
