import { Component, OnInit } from '@angular/core';
import { Center } from '../models/center.model';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  center : Center[];
  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getCenterId().subscribe(data =>this.center=data);
  }
  handleSuccessfulResponse(response) {
    this.center = response;
  }

  //This is the Delete method for deleting the Center
  delete(center:Center): any {
    this.adminService.delete(center.centerId).subscribe(
      data => {
       
      alert("Deleted Successfully")
      }
    );
    this.router.navigate(['/delete'])

}
}
