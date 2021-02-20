import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentRegistrationService {
 
  private baseUrl = 'http://localhost:8090/api/user/registration';

  constructor(private http:HttpClient){}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  createStudentRegistration(studentRegistation) {
    let s = JSON.stringify(studentRegistation)
    console.log(studentRegistation + "s");
    return this.http.post(this.baseUrl,studentRegistation,{responseType:'json'});

   }
}
