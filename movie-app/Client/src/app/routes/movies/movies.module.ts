import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [MovieListComponent, MovieDetailComponent],
  imports: [CommonModule, MoviesRoutingModule, ComponentsModule],
})
export class MoviesModule {}
