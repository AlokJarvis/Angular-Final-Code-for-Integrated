import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SuccessfulComponent } from './successful/successful.component';
import { AddcenterComponent } from './addcenter/addcenter.component';
import { DeleteComponent } from './delete/delete.component';
import { AddtestComponent } from './addtest/addtest.component';
import { DeletetestComponent } from './deletetest/deletetest.component';


const routes: Routes = [
  { path: 'adminlogin', component: AdminloginComponent },
  {path: 'successful', component:SuccessfulComponent},
  {path: 'addcenter', component:AddcenterComponent},
  {path:'delete',component:DeleteComponent},
  {path:'addtest',component:AddtestComponent},
  {path:'deleteTest',component:DeletetestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
