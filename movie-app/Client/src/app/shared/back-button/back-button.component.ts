import { Component } from '@angular/core';
import { NavigationService } from '../naviation.service';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css'],
})
export class BackButtonComponent {
  constructor(private navigation: NavigationService) {}

  back(): void {
    this.navigation.back();
  }
}
