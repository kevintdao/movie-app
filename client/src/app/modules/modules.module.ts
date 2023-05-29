import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { MoviesModule } from './movies/movies.module';
import { TvShowsModule } from './tv-shows/tv-shows.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeModule, MoviesModule, TvShowsModule],
})
export class ModulesModule {}
