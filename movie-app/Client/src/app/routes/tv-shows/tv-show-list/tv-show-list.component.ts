import { Component } from '@angular/core';
import { Perform } from 'src/app/classes/perform.class';
import { TvShowsService } from 'src/app/services/tv-shows.service';
import { TvShow } from 'src/app/services/types';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css'],
})
export class TvShowListComponent {
  tvShows = new Perform<TvShow[]>();

  constructor(private tvShowService: TvShowsService) {}

  ngOnInit(): void {
    this.tvShows.load(this.tvShowService.getTvShows());
  }
}
