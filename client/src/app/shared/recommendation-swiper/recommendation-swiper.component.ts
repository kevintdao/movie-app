import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/modules/movies/movie';
import { TvShow } from 'src/app/modules/tv-shows/tv-show';
import {
  A11y,
  Mousewheel,
  Navigation,
  Pagination,
  SwiperOptions,
} from 'swiper';

@Component({
  selector: 'recommendation-swiper',
  templateUrl: './recommendation-swiper.component.html',
  styleUrls: ['./recommendation-swiper.component.css'],
})
export class RecommendationSwiperComponent {
  @Input() recommendations: any[] = [];

  config: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Mousewheel],
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: false,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
    },
    navigation: false,
  };
}
