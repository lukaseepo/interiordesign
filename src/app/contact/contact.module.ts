import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactUs2Component } from './contact-us2/contact-us2.component';


@NgModule({
  declarations: [
    ContactUsComponent,
    ContactUs2Component
  ],
  imports: [
    BrowserModule,
    ContactRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
  ],
})
export class ContactModule { }
