import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationTestingAndWiremock } from './integration-testing-and-wiremock';

describe('IntegrationTestingAndWiremock', () => {
  let component: IntegrationTestingAndWiremock;
  let fixture: ComponentFixture<IntegrationTestingAndWiremock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegrationTestingAndWiremock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrationTestingAndWiremock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
