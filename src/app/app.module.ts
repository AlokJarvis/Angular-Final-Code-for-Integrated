import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminService } from './admin.service';
import { SuccessfulComponent } from './successful/successful.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    SuccessfulComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
