import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminService } from './admin.service';
import { SuccessfulComponent } from './successful/successful.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { GetUserByUserIdComponent } from './get-user-by-user-id/get-user-by-user-id.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    SuccessfulComponent,
    AddUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    GetUserByUserIdComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
