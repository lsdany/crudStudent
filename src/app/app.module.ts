import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LoginComponent } from './components/login/login.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ShowStudentComponent } from './components/show-student/show-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    //LoginComponent,
    AddStudentComponent,
    ShowStudentComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
