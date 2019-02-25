import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Student } from "../../model/student.model";
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {

  students: Student[];

  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit() {
    // this.apiService.getStudents()
    //   .subscribe(data => {
    //     this.students = data.result;
    //   })
  }


  deleteStudent(student: Student): void {

  };

  editStudent(student: Student): void {

  };

  addStudent(): void {

  };

}
