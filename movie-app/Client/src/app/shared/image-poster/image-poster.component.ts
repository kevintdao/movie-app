import { Component, Input } from '@angular/core';

@Component({
  selector: 'image-poster',
  templateUrl: './image-poster.component.html',
  styleUrls: ['./image-poster.component.css'],
})
export class ImagePosterComponent {
  @Input() posterPath: string = '';

  constructor() {}
}
