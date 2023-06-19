import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvShowsRoutingModule } from './tv-shows-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { TvShowListComponent } from './tv-show-list/tv-show-list.component';
import { TvShowDetailComponent } from './tv-show-detail/tv-show-detail.component';

@NgModule({
  declarations: [TvShowListComponent, TvShowDetailComponent],
  imports: [CommonModule, TvShowsRoutingModule, ComponentsModule],
})
export class TvShowsModule {}
