import { Component, OnInit } from '@angular/core';
import { TvShow } from '../tv-show';
import { ActivatedRoute } from '@angular/router';
import { TvShowsService } from '../tv-shows.service';
import { Perform } from 'src/app/classes/perform.class';
import {
  Credit,
  ImageResponse,
  RecommendationResponse,
  VideoResponse,
} from 'src/app/shared/shared';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-tv-show-detail',
  templateUrl: './tv-show-detail.component.html',
  styleUrls: ['./tv-show-detail.component.css'],
})
export class TvShowDetailComponent implements OnInit {
  tvShow = new Perform<TvShow>();
  credit = new Perform<Credit>();
  images = new Perform<ImageResponse>();
  videos = new Perform<VideoResponse>();
  recommendations = new Perform<RecommendationResponse>();

  constructor(
    private route: ActivatedRoute,
    private tvShowsService: TvShowsService,
    private sharedService: SharedService
  ) {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.load(id);
    });
  }

  ngOnInit(): void {}

  private load(id: number): void {
    this.tvShow.load(this.tvShowsService.getTvShow(id));

    this.credit.load(this.sharedService.getCredit(id, 'tv'));
    this.images.load(this.sharedService.getMediaImages(id, 'tv'));
    this.videos.load(this.sharedService.getMediaVideos(id, 'tv'));

    this.recommendations.load(this.sharedService.getRecommendations(id, 'tv'));
  }
}
