import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {LoginComponent} from "./components/login/login.component";
import {EditStudentComponent} from "./components/edit-student/edit-student.component";
import {ShowStudentComponent} from "./components/show-student/show-student.component";
import {AddStudentComponent} from "./components/add-student/add-student.component";

const routes: Routes = [
  //{ path: 'login', component: LoginComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'show-student', component: ShowStudentComponent },
  { path: 'edit-student', component: EditStudentComponent },
  //{path : '', component : LoginComponent}
  {path : '', component : ShowStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
