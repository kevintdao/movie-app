import { Component, OnInit } from '@angular/core';
import { Perform } from 'src/app/classes/perform.class';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/services/types';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies = new Perform<Movie[]>();

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movies.load(this.movieService.getTrendingMovies());
  }
}
