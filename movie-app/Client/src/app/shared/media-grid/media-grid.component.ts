import { Component, Input } from '@angular/core';

@Component({
  selector: 'media-grid',
  templateUrl: './media-grid.component.html',
  styleUrls: ['./media-grid.component.css'],
})
export class MediaGridComponent {
  @Input() items: any[] = [];
  @Input() title: string = '';
}
