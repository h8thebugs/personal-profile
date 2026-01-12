import { Component, inject, OnInit, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Sunset } from '../sunset/sunset';
import { Meta } from '@angular/platform-browser';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-home-page',
  imports: [
    TranslatePipe,
    Sunset
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage implements OnInit {
  age = signal(0);
  experience = signal(0);
  canonical = inject(CanonicalService);
  private readonly description = 'My name is Jakab Szilárd, I am 27 years old. I am working as a software developer for 4 years. I decided to make a simple profile for myself attempting to make it interactive while keeping it simple design-wise and lightweight resource-wise.';

  constructor(private readonly meta: Meta) {
    this.meta.updateTag({
      property: 'og:description',
      content: this.description
    }, 'property="og:description"');
    this.meta.updateTag({
      property: 'og:title',
      content: 'Home page'
    }, 'property="og:title"');
    this.meta.updateTag({
      name: 'description',
      content: this.description
    }, 'name="description"')
  }

  ngOnInit() {
    this.countUpAge();
    this.countUpExperience();
    this.canonical.setCanonical();
  }

  async countUpAge() {
    const targetAge = this.calculateAge(new Date(1998, 2, 8));
    for (let i = 10; i <= targetAge; i++) {
      this.age.set(i);
      await new Promise(resolve => setTimeout(resolve, Math.max(150 - i * 3, 1)));
    }
  }

  async countUpExperience() {
    const targetExperience = this.calculateAge(new Date(2021, 6, 14));
    for (let i = 0; i <= targetExperience; i++) {
      this.experience.set(i);
      await new Promise(resolve => setTimeout(resolve, Math.max(300 - i * 10, 1)));
    }
  }


  private calculateAge(date: Date) {
    const today = new Date();
    let age = today.getFullYear() - date.getFullYear();
    const monthDiff = today.getMonth() - date.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate())) {
      age--;
    }
    return age;
  }
}
