import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsMission } from './mars-mission';

describe('MarsMission', () => {
  let component: MarsMission;
  let fixture: ComponentFixture<MarsMission>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarsMission]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarsMission);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
