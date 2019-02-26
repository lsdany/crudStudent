import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
//import {ApiResponse} from "../model/api.response";
import {Student} from "../model/student.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  baseUrl: string = 'http://localhost:8080/students/';

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.baseUrl);
  }

  getStudentById(id: string): Observable<Student> {
    return this.http.get<Student>(this.baseUrl + id);
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.baseUrl, student);
  }

  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(this.baseUrl, student);
  }

  deleteStudent(id: string): Observable<Student> {
    return this.http.delete<Student>(this.baseUrl + id);
  }

}
