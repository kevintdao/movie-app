import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MediaListComponent } from './media-list/media-list.component';
import { LoadingComponent } from './loading/loading.component';
import { RatingComponent } from './rating/rating.component';
import { MediaDetailComponent } from './media-detail/media-detail.component';
import { ImagePosterComponent } from './image/image-poster/image-poster.component';
import { ImageBackdropComponent } from './image/image-backdrop/image-backdrop.component';
import { SwiperDirective } from './swiper.directive';
import { CastSwiperComponent } from './swiper/cast-swiper/cast-swiper.component';
import { ImageSwiperComponent } from './swiper/image-swiper/image-swiper.component';
import { MediaSwiperComponent } from './swiper/media-swiper/media-swiper.component';
import { GenreListComponent } from './list/genre-list/genre-list.component';
import { FavoriteButtonComponent } from './button/favorite-button/favorite-button.component';
import { BackButtonComponent } from './button/back-button/back-button.component';
import { BackButtonDirective } from './button/back-button/back-button.directive';

@NgModule({
  declarations: [
    MediaListComponent,
    LoadingComponent,
    RatingComponent,
    MediaDetailComponent,
    ImagePosterComponent,
    ImageBackdropComponent,
    SwiperDirective,
    CastSwiperComponent,
    ImageSwiperComponent,
    MediaSwiperComponent,
    GenreListComponent,
    FavoriteButtonComponent,
    BackButtonComponent,
    BackButtonDirective,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    MediaListComponent,
    LoadingComponent,
    RatingComponent,
    ImagePosterComponent,
    ImageBackdropComponent,
    CastSwiperComponent,
    MediaSwiperComponent,
    GenreListComponent,
    FavoriteButtonComponent,
    BackButtonComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
