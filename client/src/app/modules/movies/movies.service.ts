import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movie, MovieResponse } from './movie';
import { Observable } from 'rxjs';
import { ImageResponse } from 'src/app/shared/shared';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiString = 'https://api.themoviedb.org/3';
  private apiKey = `api_key=${environment.api_key}`;

  constructor(private HttpClient: HttpClient) {}

  getMovies(): Observable<MovieResponse> {
    return this.HttpClient.get<MovieResponse>(
      `${this.apiString}/trending/movie/day?${this.apiKey}`
    );
  }

  getMovie(id: number): Observable<Movie> {
    return this.HttpClient.get<Movie>(
      `${this.apiString}/movie/${id}?${this.apiKey}`
    );
  }
}
