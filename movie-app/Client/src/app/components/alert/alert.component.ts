import { Component, Input } from '@angular/core';
import { AlertType } from 'src/app/services/types';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  @Input() message: string = '';
  @Input() type?: AlertType;
}
