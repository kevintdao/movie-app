import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    // if no id, then no movie
    if (id) this.movie = undefined;

    this.moviesService.getMovie(id as string).subscribe((movie) => {
      this.movie = movie;
    });
  }
}
