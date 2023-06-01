import { Component, Input } from '@angular/core';
import { Video } from '../shared';
import {
  A11y,
  Mousewheel,
  Navigation,
  Pagination,
  SwiperOptions,
} from 'swiper';

@Component({
  selector: 'video-swiper',
  templateUrl: './video-swiper.component.html',
  styleUrls: ['./video-swiper.component.css'],
})
export class VideoSwiperComponent {
  @Input() videos: Video[] = [];
  @Input() label: string = 'Videos';

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
