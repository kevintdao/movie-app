import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './back-button/back-button.component';
import { RouterModule } from '@angular/router';
import { ImageBackdropComponent } from './image-backdrop/image-backdrop.component';
import { ImagePosterComponent } from './image-poster/image-poster.component';
import { CastListComponent } from './cast-list/cast-list.component';
import { GenreListComponent } from './genre-list/genre-list.component';
import { ImageProfileComponent } from './image-profile/image-profile.component';
import { SwiperDirectiveDirective } from './swiper.directive';
import { VideoSwiperComponent } from './video-swiper/video-swiper.component';
import { SectionLabelComponent } from './section-label/section-label.component';
import { RatingComponent } from './rating/rating.component';
import { MediaGridComponent } from './media-grid/media-grid.component';
import { MediaDetailComponent } from './media-detail/media-detail.component';
import { PosterSwiperComponent } from './poster-swiper/poster-swiper.component';
import { BackdropSwiperComponent } from './backdrop-swiper/backdrop-swiper.component';
import { LoadingComponent } from './loading/loading.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { FavoriteButtonComponent } from './favorite-button/favorite-button.component';
import { MediaSwiperComponent } from './media-swiper/media-swiper.component';

@NgModule({
  declarations: [
    BackButtonComponent,
    ImageBackdropComponent,
    ImagePosterComponent,
    CastListComponent,
    GenreListComponent,
    ImageProfileComponent,
    SwiperDirectiveDirective,
    VideoSwiperComponent,
    SectionLabelComponent,
    RatingComponent,
    MediaSwiperComponent,
    MediaGridComponent,
    MediaDetailComponent,
    PosterSwiperComponent,
    BackdropSwiperComponent,
    LoadingComponent,
    ReviewListComponent,
    FavoriteButtonComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    BackButtonComponent,
    ImageBackdropComponent,
    ImagePosterComponent,
    GenreListComponent,
    CastListComponent,
    VideoSwiperComponent,
    SectionLabelComponent,
    RatingComponent,
    MediaSwiperComponent,
    MediaGridComponent,
    PosterSwiperComponent,
    BackdropSwiperComponent,
    LoadingComponent,
    ReviewListComponent,
    FavoriteButtonComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
