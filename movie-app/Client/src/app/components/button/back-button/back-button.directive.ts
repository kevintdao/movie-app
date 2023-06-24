import { Directive, HostListener } from '@angular/core';
import { NavigationService } from 'src/app/services/naviation.service';

@Directive({
  selector: '[backButton]',
})
export class BackButtonDirective {
  constructor(private navigation: NavigationService) {}

  @HostListener('click')
  onClick(): void {
    this.navigation.back();
  }
}
