import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
