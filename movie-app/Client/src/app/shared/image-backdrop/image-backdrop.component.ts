import { Component, Input } from '@angular/core';

@Component({
  selector: 'image-backdrop',
  templateUrl: './image-backdrop.component.html',
  styleUrls: ['./image-backdrop.component.css'],
})
export class ImageBackdropComponent {
  @Input() backdropPath: string = '';

  constructor() {}
}
