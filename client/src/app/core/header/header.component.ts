import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  shadow = false;

  links = [
    { path: '/movies', label: 'Movies' },
    { path: '/tv-shows', label: 'TV Shows' },
  ];

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 0) {
      this.shadow = true;
    } else {
      this.shadow = false;
    }
  };
}
