import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TvShow, TvShowDetail } from './types';

@Injectable({
  providedIn: 'root',
})
export class TvShowsService {
  private serverUrl = environment.server_url;

  constructor(private HttpClient: HttpClient) {}

  getTrendingTvShows() {
    return this.HttpClient.get<TvShow[]>(`${this.serverUrl}/TVShow/trending`);
  }

  getTopRatedTvShows() {
    return this.HttpClient.get<TvShow[]>(`${this.serverUrl}/TVShow/top_rated`);
  }

  getTvShow(id: number) {
    return this.HttpClient.get<TvShowDetail>(`${this.serverUrl}/TVShow/${id}`);
  }
}
