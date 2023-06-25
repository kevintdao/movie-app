import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Perform } from 'src/app/classes/perform.class';
import { TvShowsService } from 'src/app/services/tv-shows.service';
import { TvShowDetail } from 'src/app/services/types';

@Component({
  selector: 'app-tv-show-detail',
  templateUrl: './tv-show-detail.component.html',
  styleUrls: ['./tv-show-detail.component.css'],
})
export class TvShowDetailComponent {
  tvShow = new Perform<TvShowDetail>();

  constructor(
    private route: ActivatedRoute,
    private tvShowService: TvShowsService
  ) {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loadShow(id);
    });
  }

  ngOnInit(): void {}

  private loadShow(id: number) {
    this.tvShow.load(this.tvShowService.getTvShow(id));
  }
}
