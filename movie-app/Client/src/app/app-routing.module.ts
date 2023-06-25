import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home/home.component';
import { LoginComponent } from './routes/home/login/login.component';
import { NotFoundComponent } from './routes/home/not-found/not-found.component';
import { RegisterComponent } from './routes/home/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
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
  {
    path: 'users',
    loadChildren: () =>
      import('./routes/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
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
