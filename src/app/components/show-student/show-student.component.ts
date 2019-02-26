import { Component, OnInit } from '@angular/core';
import { Student } from "../../model/student.model";
import { ApiService } from "../../services/api.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {

  students: Student[];

  constructor(private apiService: ApiService, private router: Router) {
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
    this.apiService.deleteStudent(student.id)
      .subscribe( data => {
        this.students = this.students.filter(u => u !== student);
      })
  };

  editStudent(student: Student): void {

    window.localStorage.removeItem("editStudentId");
    window.localStorage.setItem("editStudentId", student.id.toString());
    this.router.navigate(['edit-student']);
  };

  addStudent(): void {
      this.router.navigate(['add-student']);
  };

}
