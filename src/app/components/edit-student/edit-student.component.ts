import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../services/api.service";
import {Router} from "@angular/router";
import {Student} from "../../model/student.model";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  student: Student;
  editForm: FormGroup;


  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  ngOnInit() {

    let studentId = window.localStorage.getItem("editStudentId");

    if(!studentId) {
      alert("Invalid action.")
      this.router.navigate(['show-student']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required]
    });
    this.apiService.getStudentById(studentId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }


  onSubmit() {
    this.apiService.updateStudent(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          alert(data)
          this.router.navigate(['show-student']);
        },
        error => {
          alert(error);
        });
  }

}
