import { Component, Input, ViewChild } from '@angular/core';
import {
  A11y,
  Mousewheel,
  Navigation,
  Pagination,
  SwiperOptions,
  Autoplay,
} from 'swiper';

@Component({
  selector: 'trending-swiper',
  templateUrl: './trending-swiper.component.html',
  styleUrls: ['./trending-swiper.component.css'],
})
export class TrendingSwiperComponent {
  @Input() medias: any[] = [];

  config: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Mousewheel, Autoplay],
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    navigation: true,
  };
}
