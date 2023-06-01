import { Component, OnInit } from '@angular/core';
import { Movie, MovieResponse } from '../../movies/movie';
import { TvShow, TvShowResponse } from '../../tv-shows/tv-show';
import { MoviesService } from '../../movies/movies.service';
import { TvShowsService } from '../../tv-shows/tv-shows.service';
import { Perform } from 'src/app/classes/perform.class';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  trendingMedia = new Perform<any>();
  popularMovies = new Perform<MovieResponse>();
  popularTvShows = new Perform<TvShowResponse>();
  topRatedMovies = new Perform<MovieResponse>();
  topRatedTvShows = new Perform<TvShowResponse>();

  constructor(
    private sharedService: SharedService,
    private moviesService: MoviesService,
    private tvShowsService: TvShowsService
  ) {}

  ngOnInit(): void {
    this.trendingMedia.load(this.sharedService.getTrending());

    this.popularMovies.load(this.moviesService.getMovieLists('popular'));
    this.popularTvShows.load(this.tvShowsService.getTvShowLists('popular'));

    this.topRatedMovies.load(this.moviesService.getMovieLists('top_rated'));
    this.topRatedTvShows.load(this.tvShowsService.getTvShowLists('top_rated'));
  }
}