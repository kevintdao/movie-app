import { Component, Input } from '@angular/core';
import {
  A11y,
  Mousewheel,
  Navigation,
  Pagination,
  SwiperOptions,
} from 'swiper';
import { Router } from '@angular/router';

@Component({
  selector: 'media-swiper',
  templateUrl: './media-swiper.component.html',
  styleUrls: ['./media-swiper.component.css'],
})
export class MediaSwiperComponent {
  @Input() title: string = 'You might also like';
  @Input() items: any[] = [];
  @Input() mediaType: 'movies' | 'tv-shows' = 'movies';

  constructor(private router: Router) {}

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
