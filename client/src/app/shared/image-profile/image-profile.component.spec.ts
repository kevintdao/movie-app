import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProfileComponent } from './image-profile.component';

describe('ImageProfileComponent', () => {
  let component: ImageProfileComponent;
  let fixture: ComponentFixture<ImageProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageProfileComponent]
    });
    fixture = TestBed.createComponent(ImageProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
