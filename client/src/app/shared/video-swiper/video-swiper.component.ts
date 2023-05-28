import { Component, Input } from '@angular/core';

@Component({
  selector: 'video-swiper',
  templateUrl: './video-swiper.component.html',
  styleUrls: ['./video-swiper.component.css'],
})
export class VideoSwiperComponent {
  @Input() videos: string[] = [];
  @Input() label: string = 'Videos';
}
