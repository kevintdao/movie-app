import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MediaListComponent } from './media-list/media-list.component';
import { LoadingComponent } from './loading/loading.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [MediaListComponent, LoadingComponent, RatingComponent],
  imports: [CommonModule, RouterModule],
  exports: [MediaListComponent, LoadingComponent, RatingComponent],
})
export class ComponentsModule {}
