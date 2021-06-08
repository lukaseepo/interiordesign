import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { PageRoutingModule } from './page-routing.module';
import { OurteamComponent } from './ourteam/ourteam.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    
  
    OurteamComponent,
              PricingComponent,
              FaqComponent,
              NotfoundComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatTabsModule,
    PageRoutingModule
  ],
  exports:[

  ]
})
export class PageModule { }
