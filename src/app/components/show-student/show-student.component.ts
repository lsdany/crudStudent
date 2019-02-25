import { Component, OnInit } from '@angular/core';
//import { Router } from "@angular/router";
import { Student } from "../../model/student.model";
import { ApiService } from "../../services/api.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {

  students: Student[];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getStudents()
      .subscribe( data => {
        this.students = data;
        console.log('this is a comment');
        console.log(this.students);
      });
  }

  deleteStudent(student: Student): void {

  };

  editStudent(student: Student): void {

  };

  addStudent(): void {

  };

}
