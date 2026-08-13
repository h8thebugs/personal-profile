import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersAndClouds } from './containers-and-clouds';

describe('ContainersAndClouds', () => {
  let component: ContainersAndClouds;
  let fixture: ComponentFixture<ContainersAndClouds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainersAndClouds]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainersAndClouds);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
