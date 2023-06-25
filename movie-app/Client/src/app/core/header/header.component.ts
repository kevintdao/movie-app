import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  shadow = false;
  name = 'John Doe';

  links = [
    { path: '/movies', label: 'Movies' },
    { path: '/tv-shows', label: 'TV Shows' },
  ];

  constructor(public authService: AuthService) {}

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
