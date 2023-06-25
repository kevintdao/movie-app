import { Component } from '@angular/core';
import { Perform } from 'src/app/classes/perform.class';
import { MoviesService } from 'src/app/services/movies.service';
import { TvShowsService } from 'src/app/services/tv-shows.service';
import { Movie, TvShow } from 'src/app/services/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  trendingMovies = new Perform<Movie[]>();
  topRatedMovies = new Perform<Movie[]>();
  trendingTvShows = new Perform<TvShow[]>();
  topRatedTvShows = new Perform<TvShow[]>();

  constructor(
    private moviesService: MoviesService,
    private tvShowsService: TvShowsService
  ) {}

  ngOnInit(): void {
    this.trendingMovies.load(this.moviesService.getTrendingMovies());
    this.trendingTvShows.load(this.tvShowsService.getTrendingTvShows());

    this.topRatedMovies.load(this.moviesService.getTopRatedMovies());
    this.topRatedTvShows.load(this.tvShowsService.getTopRatedTvShows());
  }
}
