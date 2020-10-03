import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Admin } from './models/admin.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  

  constructor(private http:HttpClient) { }

  private loginUrl = 'http://localhost:8088/onlinetestmanagementsystem/admins';
  
  public loginAdmin(admin :Admin):Observable<any>{
    return this.http.post<any>(this.loginUrl,admin)
    
}

  







}