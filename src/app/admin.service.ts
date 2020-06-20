import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Admin } from './models/admin.model';
import { Observable } from 'rxjs';
import { Center } from './models/center.model';
import { Test } from './models/test.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  

  constructor(private http:HttpClient) { }

  private loginUrl = 'http://localhost:8204/healthcaresystem/admins';
  
  public loginAdmin(admin :Admin):Observable<any>{
    return this.http.post<any>(this.loginUrl,admin)
    
}
private addUrl = 'http://localhost:9091/center/addcenter';
  

//This is for adding the Center 
  public addCenter(center :Center):Observable<any>{
    return this.http.post<any>(this.addUrl,center)
    
}
//This is the Delete method for deleting the Center using ID.
public delete(id:String):Observable<any>{
  let deleteUrl='http://localhost:9091/center/removecenter/center-id/'+id;
  return this.http.delete(deleteUrl,{responseType:'text'})
  
}
getCenterId():Observable<Center[]>
{
  let url= "http://localhost:9091/center/getallcenters";
  return this.http.get<Center[]>(url);
}
public addTest(test :Test):Observable<any>{
  let testUrl='http://localhost:8500/test/tests';
  return this.http.post<any>(testUrl,test)
  
}
public deleteTest(id:String):Observable<any>{
  let deleteUrl='http://localhost:8500/test/tests/'+id;
  return this.http.delete(deleteUrl,{responseType:'text'})
  
}
getDeleteId():Observable<Test[]>
{
  let url= "http://localhost:8500/test/tests";
  return this.http.get<Test[]>(url);
}
}