import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserDto } from '../models/userDto';
import { UserServiceService } from '../user-service/user-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  service : UserServiceService;
  show: boolean = false;
  user:User = new User();
  userResp : User;
  resp:boolean = false;

  constructor(service: UserServiceService) {
    this.service=service;
   }

  ngOnInit(): void {
  }
  updateUser(form:any){
    let details=form.value;
    let userId = details.userId;
    let userName = details.userName;
    let userPassword = details.userPassword;
    let isAdmin = details.isAdmin;
    let finalUserObj = new UserDto(userName,userPassword,isAdmin);
    let result : Observable<User> = this.service.updateUser(finalUserObj, userId);
    result.subscribe((response:User)=>{
      this.userResp=response;
      this.resp=true;
    },
      err =>{
      this.resp= false;
      console.log("No such User exists.");
    });
  
    this.show=true;
    form.reset();
  
  }
  
  }
  


