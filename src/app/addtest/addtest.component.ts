import { Component, OnInit } from '@angular/core';
import { Test } from '../models/test.model';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-addtest',
  templateUrl: './addtest.component.html',
  styleUrls: ['./addtest.component.css']
})
export class AddtestComponent implements OnInit {
  test: Test=new Test();
  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
  }
  addTest(): void {
    this.adminService.addTest(this.test).subscribe(
      data => {
        console.log("response recieved");
      alert("Test Added Successfully")
      },
      error => {
        console.log("exception occured");
        
        

}
    )
}

}
