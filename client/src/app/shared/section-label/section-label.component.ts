import { Component, Input } from '@angular/core';

@Component({
  selector: 'section-label',
  templateUrl: './section-label.component.html',
  styleUrls: ['./section-label.component.css'],
})
export class SectionLabelComponent {
  @Input() label: string = '';
}
