import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { ServiceComponent } from './service/service.component';


const routes:Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "home2",
        component: Home2Component,
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "service",
        component: ServiceComponent
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class MainRoutingModule{};