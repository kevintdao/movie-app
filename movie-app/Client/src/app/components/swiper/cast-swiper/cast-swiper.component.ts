import { Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/services/types';
import {
  A11y,
  Mousewheel,
  Navigation,
  Pagination,
  SwiperOptions,
} from 'swiper';

@Component({
  selector: 'cast-swiper',
  templateUrl: './cast-swiper.component.html',
  styleUrls: ['./cast-swiper.component.css'],
})
export class CastSwiperComponent implements OnInit {
  @Input() casts: Cast[] = [];

  config: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Mousewheel],
    grabCursor: true,
    slidesPerView: 5,
    spaceBetween: 10,
    centeredSlides: false,
    pagination: {
      clickable: true,
    },
    navigation: true,
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
      1024: {
        slidesPerView: 5,
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
