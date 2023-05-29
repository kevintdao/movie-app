import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  Credit,
  ImageResponse,
  Media,
  RecommendationResponse,
  VideoResponse,
} from './shared';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private apiString = 'https://api.themoviedb.org/3';
  private apiKey = `api_key=${environment.api_key}`;

  constructor(private HttpClient: HttpClient) {}

  getCredit(id: number, media: Media): Observable<Credit> {
    return this.HttpClient.get<Credit>(
      `${this.apiString}/${media}/${id}/credits?${this.apiKey}`
    );
  }

  getMediaImages(id: number, media: Media): Observable<ImageResponse> {
    return this.HttpClient.get<ImageResponse>(
      `${this.apiString}/${media}/${id}/images?${this.apiKey}`
    );
  }

  getMediaVideos(id: number, media: Media): Observable<VideoResponse> {
    return this.HttpClient.get<VideoResponse>(
      `${this.apiString}/${media}/${id}/videos?${this.apiKey}`
    );
  }

  getRecommendations(
    id: number,
    media: Media
  ): Observable<RecommendationResponse> {
    return this.HttpClient.get<RecommendationResponse>(
      `${this.apiString}/${media}/${id}/recommendations?${this.apiKey}`
    );
  }
}
