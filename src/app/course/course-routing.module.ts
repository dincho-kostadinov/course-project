import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from "../auth/auth.guard";
import { CourseComponent } from "./add-course/add-course.component";
import { RouterModule } from "@angular/router";
import { DeleteCourseComponent } from "./delete-course/delete.component";
import { EditCourseComponent } from "./edit-course/edit-course.component";
import { ListCoursesComponent } from "./list-courses/list-courses.component";
import { TopCoursesComponent } from "./top-courses/top-courses.component";
import { ViewCourseComponent } from "./details-course/view-course.component";
const routes = [
  { path: "courses", component: ListCoursesComponent },
  { path: "top", canActivate: [AuthGuard], component: TopCoursesComponent },
  { path: "course/:id/delete", canActivate: [AuthGuard], component: DeleteCourseComponent },
  { path: "course/:id/edit", canActivate: [AuthGuard], component: EditCourseComponent },
  { path: "course/:id/details", component: ViewCourseComponent },
  { path: "top/course/:id/details",canActivate: [AuthGuard], component: ViewCourseComponent },
  { path: "top/course/:id/delete", canActivate: [AuthGuard], component: DeleteCourseComponent },
  { path: "top/course/:id/edit", canActivate: [AuthGuard], component: EditCourseComponent },
  { path: "courses/add", canActivate: [AuthGuard], component: CourseComponent },
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class CourseRoutingModule { }
