import { Component, Input } from '@angular/core';

@Component({
  selector: 'image-swiper',
  templateUrl: './image-swiper.component.html',
  styleUrls: ['./image-swiper.component.css'],
})
export class ImageSwiperComponent {
  @Input() images: string[] = [];
  @Input() label: string = 'Images';
}
