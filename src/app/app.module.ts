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
import { AddcenterComponent } from './addcenter/addcenter.component';
import { DeleteComponent } from './delete/delete.component';
import { AddtestComponent } from './addtest/addtest.component';
import { DeletetestComponent } from './deletetest/deletetest.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    SuccessfulComponent,
    AddcenterComponent,
    DeleteComponent,
    AddtestComponent,
    DeletetestComponent
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
