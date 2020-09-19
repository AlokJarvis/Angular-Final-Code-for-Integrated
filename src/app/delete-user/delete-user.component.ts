import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServiceService } from '../user-service/user-service.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  service:UserServiceService;
  show:boolean=false;
  response:boolean;


  constructor(service:UserServiceService) {
    this.service=service;
   }

  ngOnInit(): void {
  }
  deleteUser(deleteUserForm:any){
    let userId = deleteUserForm.value.userId;
    console.log(userId);
    let result : Observable<boolean> = this.service.deleteUser(userId);
    result.subscribe((ans:boolean)=>{
    this.response=true;
    console.log(ans);
    this.show=true;
  },
    error =>{
      this.response=false;
      this.show=true;
      console.log("No such User found. ");
    });
  
  }
  }
  
  


