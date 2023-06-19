import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./routes/movies/movies.module').then((m) => m.MoviesModule),
  },
  {
    path: 'tv-shows',
    loadChildren: () =>
      import('./routes/tv-shows/tv-shows.module').then((m) => m.TvShowsModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
