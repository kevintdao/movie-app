import { Component, Input } from '@angular/core';
import { Image } from '../shared';
import {
  A11y,
  Mousewheel,
  Navigation,
  Pagination,
  SwiperOptions,
} from 'swiper';

@Component({
  selector: 'poster-swiper',
  templateUrl: './poster-swiper.component.html',
  styleUrls: ['./poster-swiper.component.css'],
})
export class PosterSwiperComponent {
  @Input() images: Image[] = [];
  @Input() label: string = 'Posters';

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
