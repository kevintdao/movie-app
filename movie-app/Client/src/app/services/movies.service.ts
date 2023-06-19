import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from './types';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private serverUrl = environment.server_url;

  constructor(private HttpClient: HttpClient) {}

  getMovies() {
    return this.HttpClient.get<Movie[]>(`${this.serverUrl}/Movie`);
  }

  getMovie(id: number) {
    return this.HttpClient.get<Movie>(`${this.serverUrl}/Movie/${id}`);
  }
}
