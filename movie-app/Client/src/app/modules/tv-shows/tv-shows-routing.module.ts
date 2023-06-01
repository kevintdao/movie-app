import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TvShowListComponent } from './tv-show-list/tv-show-list.component';
import { TvShowDetailComponent } from './tv-show-detail/tv-show-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TvShowListComponent,
  },
  {
    path: ':id',
    component: TvShowDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvShowsRoutingModule {}
