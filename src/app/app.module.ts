import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from "./auth/auth.service";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from "./auth/auth.guard";
import { CourseService } from "./course/course.service";
import { HttpModule } from "@angular/http";
import { SearchPipe } from "./pipes/search.pipe";
import { FilterPipe } from "./pipes/filter.pipe";
import { AuthModule } from "./auth/auth.module";
import { AuthRoutingModule } from "./auth/auth-routing.module";
import { MainModule } from "./main/main.module";
import { MainRoutingModule } from "./main/main-routing.module";
import { CourseRoutingModule } from "./course/course-routing.module";
import { CourseModule } from "./course/course.module";
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    HttpModule,
    CourseModule,
    AuthModule,
    MainModule,
    SimpleNotificationsModule.forRoot(),
   
  ],
  providers: [AuthService, AuthGuard, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
