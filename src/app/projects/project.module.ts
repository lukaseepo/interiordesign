import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectdetailComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    ProjectRoutingModule,
  ],
  exports:[
    ProjectsComponent
  ]

})
export class ProjectModule {}
