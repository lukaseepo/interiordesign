import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from '../pages/faq/faq.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { ProjectsComponent } from './projects/projects.component';




const routes:Routes = [
   {
       path: "projects",
       component: ProjectsComponent
   },
   {
       path: "projectdetail",
       component: ProjectdetailComponent
   },
   {
    path: "FAQ",
    component: FaqComponent,
}
]

@NgModule({
    imports:[RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
    exports:[RouterModule]
})

export class ProjectRoutingModule{};