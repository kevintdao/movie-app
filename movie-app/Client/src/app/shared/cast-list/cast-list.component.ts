import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Cast } from '../shared';
import {
  A11y,
  Mousewheel,
  Navigation,
  Pagination,
  SwiperOptions,
} from 'swiper';

@Component({
  selector: 'cast-list',
  templateUrl: './cast-list.component.html',
  styleUrls: ['./cast-list.component.css'],
})
export class CastListComponent implements OnInit {
  @Input() casts: Cast[] = [];

  config: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Mousewheel],
    grabCursor: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: false,
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
    navigation: false,
  };

  constructor() {}

  ngOnInit(): void {}
}
