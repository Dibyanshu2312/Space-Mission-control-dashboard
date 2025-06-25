import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssTracker } from './iss-tracker';

describe('IssTracker', () => {
  let component: IssTracker;
  let fixture: ComponentFixture<IssTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssTracker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssTracker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
