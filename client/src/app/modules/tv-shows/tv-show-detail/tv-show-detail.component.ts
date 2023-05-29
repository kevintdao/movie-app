import { Component, OnInit } from '@angular/core';
import { TvShow } from '../tv-show';
import { ActivatedRoute } from '@angular/router';
import { TvShowsService } from '../tv-shows.service';

@Component({
  selector: 'app-tv-show-detail',
  templateUrl: './tv-show-detail.component.html',
  styleUrls: ['./tv-show-detail.component.css'],
})
export class TvShowDetailComponent implements OnInit {
  tvShow: TvShow | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private tvShowsService: TvShowsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.tvShowsService.getTvShow(id).subscribe((tvShow) => {
      this.tvShow = tvShow;
    });
  }
}
