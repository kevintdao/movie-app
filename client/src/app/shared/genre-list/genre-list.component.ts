import { Component, Input } from '@angular/core';
import { Genre } from '../shared';

@Component({
  selector: 'genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css'],
})
export class GenreListComponent {
  @Input() genres: Genre[] = [];
}
