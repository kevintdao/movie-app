import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import {
  Credit,
  ImageResponse,
  RecommendationResponse,
  VideoResponse,
} from 'src/app/shared/shared';
import { Perform } from 'src/app/classes/perform.class';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movie = new Perform<Movie>();
  credit = new Perform<Credit>();
  images = new Perform<ImageResponse>();
  videos = new Perform<VideoResponse>();
  recommendations = new Perform<RecommendationResponse>();

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.params;
    const id = Number(routeParams['id']);

    // if no id, then no movie
    if (!id) return;

    this.movie.load(this.moviesService.getMovie(id));

    this.credit.load(this.sharedService.getCredit(id, 'movie'));
    this.images.load(this.sharedService.getMediaImages(id, 'movie'));
    this.videos.load(this.sharedService.getMediaVideos(id, 'movie'));

    this.recommendations.load(
      this.sharedService.getRecommendations(id, 'movie')
    );
  }
}
