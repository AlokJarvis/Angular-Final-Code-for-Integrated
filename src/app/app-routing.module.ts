import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SuccessfulComponent } from './successful/successful.component';



const routes: Routes = [
  { path: 'adminlogin', component: AdminloginComponent },
  {path: 'successful', component:SuccessfulComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
