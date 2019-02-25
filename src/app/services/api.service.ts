import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
//import {User} from "../model/user.model";
import {Observable} from "rxjs/index";
//import {ApiResponse} from "../model/api.response";
import {Student} from "../model/student.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  baseUrl: string = 'http://localhost:8080/';

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.baseUrl);
  }

}
