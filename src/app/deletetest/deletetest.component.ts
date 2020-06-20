import { Component, OnInit } from '@angular/core';
import { Test } from '../models/test.model';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-deletetest',
  templateUrl: './deletetest.component.html',
  styleUrls: ['./deletetest.component.css']
})
export class DeletetestComponent implements OnInit {
  test : Test[];
  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getDeleteId().subscribe(data =>this.test=data);
  }
  handleSuccessfulResponse(response) {
    this.test = response;
  }

  //This is the Delete method for deleting the test.
  deleteTest(test:Test): any {
    this.adminService.deleteTest(test.testId).subscribe(
      data => {
       
      alert("Deleted Successfully")
      }
    );
    this.router.navigate(['/delete'])

}

}
