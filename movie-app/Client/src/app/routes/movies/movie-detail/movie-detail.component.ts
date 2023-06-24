import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Perform } from 'src/app/classes/perform.class';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieDetail } from 'src/app/services/types';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movie = new Perform<MovieDetail>();

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loadMovie(id);
    });
  }

  ngOnInit(): void {}

  private loadMovie(id: number) {
    this.movie.load(this.movieService.getMovie(id));
  }
}
