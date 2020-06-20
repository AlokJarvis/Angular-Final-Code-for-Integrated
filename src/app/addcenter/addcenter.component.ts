import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Center } from '../models/center.model';

@Component({
  selector: 'app-addcenter',
  templateUrl: './addcenter.component.html',
  styleUrls: ['./addcenter.component.css']
})
export class AddcenterComponent implements OnInit {
center: Center=new Center();
  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
  }
  addCenter(): void {
    this.adminService.addCenter(this.center).subscribe(
      data => {
        console.log("response recieved");
      alert("Center Added Successfully")
      },
      error => {
        console.log("exception occured");
        
        

}
    )
}

}
