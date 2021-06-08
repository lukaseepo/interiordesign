import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactUs2Component } from './contact-us2/contact-us2.component';


const routes:Routes = [
  {
      path: "contact-us",
      component: ContactUsComponent
  },
  {
    path: "contact-us2",
    component: ContactUs2Component
  }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class ContactRoutingModule{};