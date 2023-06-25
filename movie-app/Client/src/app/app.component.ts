import { AfterViewInit, Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'client';

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    register();
  }
}
