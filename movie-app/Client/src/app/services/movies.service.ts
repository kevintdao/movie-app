import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie, MovieDetail } from './types';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private serverUrl = environment.server_url;

  constructor(private HttpClient: HttpClient) {}

  getTrendingMovies() {
    return this.HttpClient.get<Movie[]>(`${this.serverUrl}/Movie/trending`);
  }

  getTopRatedMovies() {
    return this.HttpClient.get<Movie[]>(`${this.serverUrl}/Movie/top_rated`);
  }

  getMovie(id: number) {
    return this.HttpClient.get<MovieDetail>(`${this.serverUrl}/Movie/${id}`);
  }
}
