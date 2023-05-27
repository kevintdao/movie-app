import { Component } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  movies: Movie[] = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
    },
    {
      title: 'The Godfather',
      year: 1972,
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
    },
    {
      title: 'The Dark Knight',
      year: 2008,
    },
  ];
}
