import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserDto } from '../models/userDto';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  client : HttpClient;
  constructor(client:HttpClient) {
    this.client=client;
   }
   baseUserUrl="http://localhost:8086/users";

   addUser(user : UserDto): Observable<User>{
     let url=this.baseUserUrl+"/add";
     let result:Observable<User>=this.client.post<User>(url,user);
     return result;
      }

     deleteUser(userId: number): Observable<boolean>{
      let url=this.baseUserUrl+"/remove/"+userId;
      let result: Observable<boolean> = this.client.get<boolean>(url);
      return result;
      }

     updateUser(user : UserDto, userId :number):Observable<User>{
      let url=this.baseUserUrl+"/update/"+userId;
      let result : Observable<User>=this.client.put<User>(url,user);
      return result;

     } 
     getUserByUserId(userId:number ):Observable<User>{
      let url=this.baseUserUrl+"/get/"+userId;
      let result : Observable<User>=this.client.get<User>(url)
      return result;
     }

      
      
   
}
