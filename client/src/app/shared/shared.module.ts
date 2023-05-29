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
import { ImageSwiperComponent } from './image-swiper/image-swiper.component';
import { SectionLabelComponent } from './section-label/section-label.component';
import { RatingComponent } from './rating/rating.component';
import { MediaGridComponent } from './media-grid/media-grid.component';
import { MediaDetailComponent } from './media-detail/media-detail.component';

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
    ImageSwiperComponent,
    SectionLabelComponent,
    RatingComponent,
    MediaGridComponent,
    MediaDetailComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    BackButtonComponent,
    ImageBackdropComponent,
    ImagePosterComponent,
    GenreListComponent,
    CastListComponent,
    VideoSwiperComponent,
    ImageSwiperComponent,
    RatingComponent,
    MediaGridComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
