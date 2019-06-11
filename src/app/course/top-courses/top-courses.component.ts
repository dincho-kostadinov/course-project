import { Component } from '@angular/core';
import { AuthService } from "../../auth/auth.service";
import { Router } from "@angular/router";
import { CourseService } from "../course.service";
import { Course } from "../course.model";
import { FilterTopPipe } from "../../pipes/top-courses.pipe";
import { SlicePipe } from '@angular/common';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
@Component({
  selector: 'app-top-courses',
  templateUrl: './top-courses.component.html',
  styleUrls: ['./top-courses.component.css'],
  animations: [
    
            trigger('listAnimation', [
                transition('* => *', [
    
                    query(':enter', style({ opacity: 0 }), { optional: true }),
    
                    query(':enter', stagger('300ms', [
                        animate('1s ease-in', keyframes([
                            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
                        ]))]), { optional: true }),
                        
                ])
            ])
    
        ]
})
export class TopCoursesComponent {
    courses = [];
    constructor(private auth: AuthService, private router: Router, private courseService: CourseService) {

    }
    gotoAddCourse() {
        this.router.navigate(['courses/add']);
    }
    gotoViewCourse(course) {
        this.courseService.addCourseForView(course);
        this.router.navigate(['top/course/' + course.id + '/details']);
    }
    gotoDeleteCourse(course) {
        this.courseService.addCourseForDelete(course);
        this.router.navigate(['top/course/' + course.id + '/delete']);
    }
    gotoEditCourse(course) {
        this.courseService.addCourseForEdit(course);
        this.router.navigate(['top/course/' + course.id + '/edit']);
    }
    ngOnInit() {
        this.courseService.getCourses().subscribe((courses: Course[]) => {
            this.courses = courses;
        }, (err) => {
            alert(err)
        });
    }
}
