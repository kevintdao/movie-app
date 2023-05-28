import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MovieListComponent, MovieDetailComponent],
  imports: [CommonModule, MoviesRoutingModule, HttpClientModule, SharedModule],
})
export class MoviesModule {}
