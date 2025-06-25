import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacePhotos } from './space-photos';

describe('SpacePhotos', () => {
  let component: SpacePhotos;
  let fixture: ComponentFixture<SpacePhotos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpacePhotos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpacePhotos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
