import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISSTracker } from './iss-tracker';

describe('ISSTracker', () => {
  let component: ISSTracker;
  let fixture: ComponentFixture<ISSTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ISSTracker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ISSTracker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
