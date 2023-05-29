import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  links = [
    { path: '/movies', label: 'Movies' },
    { path: '/tv-shows', label: 'TV Shows' },
  ];
}
