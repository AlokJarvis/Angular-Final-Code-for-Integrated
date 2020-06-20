import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Admin } from '../models/admin.model';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  admin: Admin = new Admin();
  msg:String="";

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
  }
  //It is login method which is called by the HTML page for validation of credentials
  login(): void {
    this.adminService.loginAdmin(this.admin).subscribe(
      data => {
        console.log("response recieved");
        this.router.navigate(['/successful'])//,this.customer.customerName
      },
      error => {
        console.log("exception occured");
        this.msg ="Invalid Name or Password!";
        

}
    )
}
}
