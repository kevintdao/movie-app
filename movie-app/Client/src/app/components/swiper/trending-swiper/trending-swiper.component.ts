import { Component, Input } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'trending-swiper',
  templateUrl: './trending-swiper.component.html',
  styleUrls: ['./trending-swiper.component.css'],
})
export class TrendingSwiperComponent {
  @Input() medias: any[] = [];

  config: SwiperOptions = {
    loop: true,
    pagination: {
      clickable: true,
    },
    navigation: true,
  };
}
