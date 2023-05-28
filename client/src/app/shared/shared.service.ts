import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Credit } from './shared';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private apiString = 'https://api.themoviedb.org/3';
  private apiKey = `api_key=${environment.api_key}`;

  constructor(private HttpClient: HttpClient) {}

  getCredit(movieId: number): Observable<Credit> {
    return this.HttpClient.get<Credit>(
      `${this.apiString}/movie/${movieId}/credits?${this.apiKey}`
    );
  }
}
