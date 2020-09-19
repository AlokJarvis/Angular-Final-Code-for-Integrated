import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserServiceService } from '../user-service/user-service.service';

@Component({
  selector: 'app-get-user-by-user-id',
  templateUrl: './get-user-by-user-id.component.html',
  styleUrls: ['./get-user-by-user-id.component.css']
})
export class GetUserByUserIdComponent implements OnInit {
  service: UserServiceService;
  show: boolean = false;
  resp:boolean = false;
  users:User ;


  constructor(service: UserServiceService) { 
    this.service = service;
  }

  ngOnInit(): void {
  }
  getUserByUserId(form:any){
    let details = form.value;
    let userId = details.userId;
    let result : Observable<User> = this.service.getUserByUserId(userId);
    result.subscribe((response:User)=>{
      this.users=response;
      this.resp=true;
    },
      err =>{
        this.resp=false;
      console.log("No such User found.");
      
    });

    this.show=true;
    



}
}



