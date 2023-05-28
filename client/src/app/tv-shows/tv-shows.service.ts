import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TvShowResponse } from './tv-show';

@Injectable({
  providedIn: 'root',
})
export class TvShowsService {
  private apiString = 'https://api.themoviedb.org/3';
  private apiKey = `api_key=${environment.api_key}`;

  constructor(private HttpClient: HttpClient) {}

  public getTvShows(): Observable<TvShowResponse> {
    return this.HttpClient.get<TvShowResponse>(
      `${this.apiString}/trending/tv/day?${this.apiKey}`
    );
  }
}
