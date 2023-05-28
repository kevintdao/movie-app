import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSwiperComponent } from './video-swiper.component';

describe('VideoSwiperComponent', () => {
  let component: VideoSwiperComponent;
  let fixture: ComponentFixture<VideoSwiperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoSwiperComponent]
    });
    fixture = TestBed.createComponent(VideoSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
