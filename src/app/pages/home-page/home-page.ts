import {Component, inject, OnInit, signal} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {Sunset} from 'src/app/components/sunset/sunset';
import {Meta, Title} from '@angular/platform-browser';
import {CanonicalService} from 'src/app/services/canonical.service';

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
  private readonly description = 'A web developer\'s Profile, CV, Tech guides, Opinions and more. It is also a testament that web pages can and should be fast';

  constructor(private readonly meta: Meta, private title: Title) {
    this.title.setTitle(`${title.getTitle().split("-")[0]} - Home`)
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
