import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movie, MovieResponse } from './movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiString = 'https://api.themoviedb.org/3';

  constructor(private HttpClient: HttpClient) {}

  public getMovies(): Observable<MovieResponse> {
    return this.HttpClient.get<MovieResponse>(
      `${this.apiString}/trending/movie/day?api_key=${environment.api_key}`
    );
  }
}
