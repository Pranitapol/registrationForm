import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

 
  constructor(private http:HttpClient) { }
 url:any="http://localhost:3000/api/forms";
 enroll(userData:any){
 return  this.http.post<any>(this.url,userData);
  
  
 }


}
