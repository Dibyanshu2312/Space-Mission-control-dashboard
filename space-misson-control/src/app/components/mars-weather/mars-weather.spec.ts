import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsWeather } from './mars-weather';

describe('MarsWeather', () => {
  let component: MarsWeather;
  let fixture: ComponentFixture<MarsWeather>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarsWeather]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarsWeather);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
