import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { PricingComponent } from './pricing/pricing.component';


const routes:Routes = [
    {
        path: "ourteam",
        component: OurteamComponent
    },
    {
        path: "pricing",
        component: PricingComponent
    },
    {
        path: "404-page",
        component: NotfoundComponent
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class PageRoutingModule{};