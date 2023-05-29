import { Component, OnInit } from '@angular/core';
import { TvShowsService } from '../tv-shows.service';
import { TvShow } from '../tv-show';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css'],
})
export class TvShowListComponent implements OnInit {
  tvShows: TvShow[] = [];

  constructor(private tvShowsService: TvShowsService, private router: Router) {}

  ngOnInit(): void {
    this.tvShowsService.getTvShows().subscribe((tvShows) => {
      this.tvShows = tvShows.results;
    });
  }
}
