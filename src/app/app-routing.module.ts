import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { GetUserByUserIdComponent } from './get-user-by-user-id/get-user-by-user-id.component';
import { SuccessfulComponent } from './successful/successful.component';
import { UpdateUserComponent } from './update-user/update-user.component';



const routes: Routes = [
  { path: 'adminlogin', component: AdminloginComponent },
  {path: 'successful', component:SuccessfulComponent},
  {path:"addUser", component:AddUserComponent},
  {path:"deleteUser", component:DeleteUserComponent},
  {path:"getUserByUserId", component:GetUserByUserIdComponent},
  {path:"updateUser", component:UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
