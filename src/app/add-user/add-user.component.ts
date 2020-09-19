import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserDto } from '../models/userDto';
import { UserServiceService } from '../user-service/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  service:UserServiceService;
  show:boolean = false;
  userResp : User;
  user: User=new User();

  constructor(service:UserServiceService) {
    this.service=service;
   }

  ngOnInit(): void {
  }
  onClickAddUser(form:any){
    let details=form.value;
    let userName = details.userName;
    let userPassword = details.userPassword;
    let isAdmin = details.isAdmin;
    let finalUserObj = new UserDto(userName,userPassword,isAdmin);
    let result : Observable<User> = this.service.addUser(finalUserObj);
    result.subscribe((response:User)=>{
      this.userResp=response;
    },
      err =>{
      console.log("Error"+err);
    });
  
    this.show=true;
    form.reset();
  
  }
  }
  


