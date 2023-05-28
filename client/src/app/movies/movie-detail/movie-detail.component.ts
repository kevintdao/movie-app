import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { Cast, Credit } from 'src/app/shared/shared';
import { Perform } from 'src/app/classes/perform.class';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movie = new Perform<Movie>();
  credit = new Perform<Credit>();

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // if no id, then no movie
    if (!id) return;

    this.movie.load(this.moviesService.getMovie(id));

    this.credit.load(this.sharedService.getCredit(id));
  }
}
