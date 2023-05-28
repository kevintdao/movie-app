import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePosterComponent } from './image-poster.component';

describe('ImagePosterComponent', () => {
  let component: ImagePosterComponent;
  let fixture: ComponentFixture<ImagePosterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagePosterComponent]
    });
    fixture = TestBed.createComponent(ImagePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
