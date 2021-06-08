import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Home2Component } from './home2/home2.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
@NgModule({
  declarations: [
    HomeComponent,
    Home2Component,
    AboutComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    MainRoutingModule,
    CarouselModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
  ],
  exports:[
    HomeComponent,
    Home2Component,
    AboutComponent
  ]
})
export class MainModule { }
