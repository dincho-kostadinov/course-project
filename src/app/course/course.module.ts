import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SearchPipe } from "../pipes/search.pipe";
import { FilterPipe } from "../pipes/filter.pipe";
import { CourseRoutingModule } from "./course-routing.module";
import { CourseService } from "./course.service";
import { FilterTopPipe } from "../pipes/top-courses.pipe";
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseComponent } from "./add-course/add-course.component";
import { DeleteCourseComponent } from "./delete-course/delete.component";
import { EditCourseComponent } from "./edit-course/edit-course.component";
import { ListCoursesComponent } from "./list-courses/list-courses.component";
import { TopCoursesComponent } from "./top-courses/top-courses.component";
import { ViewCourseComponent } from "./details-course/view-course.component";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CourseRoutingModule,
    SimpleNotificationsModule.forRoot(),
    
  ],
  declarations: [CourseComponent, ListCoursesComponent, SearchPipe, FilterPipe,FilterTopPipe, ViewCourseComponent, DeleteCourseComponent, EditCourseComponent, TopCoursesComponent],
  providers: [CourseService]
})
export class CourseModule { }
