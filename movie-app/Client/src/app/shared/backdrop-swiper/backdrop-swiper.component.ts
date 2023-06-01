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
  selector: 'backdrop-swiper',
  templateUrl: './backdrop-swiper.component.html',
  styleUrls: ['./backdrop-swiper.component.css'],
})
export class BackdropSwiperComponent {
  @Input() images: Image[] = [];
  @Input() label: string = 'Backdrops';

  config: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Mousewheel],
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: false,
    pagination: {
      clickable: true,
    },
    navigation: true,
  };
}
