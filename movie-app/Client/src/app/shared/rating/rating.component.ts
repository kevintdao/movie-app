import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() rating: number = 0;

  ngOnInit(): void {
    // const progress = document.querySelector('progress') as HTMLElement;
    // progress.style.background = `conic-gradient(#dc2626 ${
    //   this.rating * 10
    // }%, rgba(255,255,255,0) ${this.rating * 10}%)`;
  }
}
