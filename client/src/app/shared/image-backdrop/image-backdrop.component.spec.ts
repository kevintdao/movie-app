import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBackdropComponent } from './image-backdrop.component';

describe('ImageBackdropComponent', () => {
  let component: ImageBackdropComponent;
  let fixture: ComponentFixture<ImageBackdropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageBackdropComponent]
    });
    fixture = TestBed.createComponent(ImageBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
