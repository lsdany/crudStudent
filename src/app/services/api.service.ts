import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
//import {User} from "../model/user.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  baseUrl: string = 'http://localhost:8080/students/';

  getStudents(): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.baseUrl);
  }

}
