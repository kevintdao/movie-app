import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvShowsRoutingModule } from './tv-shows-routing.module';
import { TvShowDetailComponent } from './tv-show-detail/tv-show-detail.component';
import { TvShowListComponent } from './tv-show-list/tv-show-list.component';

@NgModule({
  declarations: [TvShowDetailComponent, TvShowListComponent],
  imports: [CommonModule, TvShowsRoutingModule],
})
export class TvShowsModule {}
