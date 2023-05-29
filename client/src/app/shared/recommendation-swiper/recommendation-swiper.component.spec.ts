import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationSwiperComponent } from './recommendation-swiper.component';

describe('RecommendationSwiperComponent', () => {
  let component: RecommendationSwiperComponent;
  let fixture: ComponentFixture<RecommendationSwiperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendationSwiperComponent]
    });
    fixture = TestBed.createComponent(RecommendationSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
