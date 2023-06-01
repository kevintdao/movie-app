import { Component } from '@angular/core';
import { Review } from '../shared';

@Component({
  selector: 'review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css'],
})
export class ReviewListComponent {
  reviews: Review[] = [
    {
      id: 1,
      name: 'John Doe',
      rating: 4,
      date: '01-01-2020 12:00:00',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
    },
    {
      id: 2,
      name: 'Bob Smith',
      rating: 4,
      date: '01-01-2020 12:00:00',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
    },
    {
      id: 3,
      name: 'John Doe',
      rating: 4,
      date: '01-01-2020 12:00:00',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
    },
  ];
}
