import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TvShowsService {
  private serverUrl = environment.server_url;

  constructor(private HttpClient: HttpClient) {}
}
