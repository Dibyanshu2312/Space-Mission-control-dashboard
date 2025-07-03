import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestLaunch } from './latest-launch';

describe('LatestLaunch', () => {
  let component: LatestLaunch;
  let fixture: ComponentFixture<LatestLaunch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestLaunch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestLaunch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
