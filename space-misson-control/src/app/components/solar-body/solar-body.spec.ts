import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarBody } from './solar-body';

describe('SolarBody', () => {
  let component: SolarBody;
  let fixture: ComponentFixture<SolarBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolarBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolarBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
