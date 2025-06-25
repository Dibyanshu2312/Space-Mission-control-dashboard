import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsMissions } from './mars-missions';

describe('MarsMissions', () => {
  let component: MarsMissions;
  let fixture: ComponentFixture<MarsMissions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarsMissions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarsMissions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
