import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from "@angular/router";
import { CourseService } from "../course.service";
import { Course } from "../course.model";
import { SearchPipe } from "../../pipes/search.pipe";
import { FilterPipe } from "../../pipes/filter.pipe";
import { DatePipe } from '@angular/common';
import { AuthService } from "../../auth/auth.service";
import { SlicePipe } from '@angular/common';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
@Component({
    selector: 'app-list-course',
    templateUrl: './list-courses.component.html',
    styleUrls: ['./list-courses.component.css'],
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
export class ListCoursesComponent implements OnInit {
    courses = [];
    constructor(private auth: AuthService, private router: Router, private courseService: CourseService) {

    }
    gotoAddCourse() {
        this.router.navigate(['courses/add']);
    }
    gotoViewCourse(course) {
        this.courseService.addCourseForView(course);
        this.router.navigate(['course/' + course.id + '/details']);
    }
    gotoDeleteCourse(course) {
        this.courseService.addCourseForDelete(course);
        this.router.navigate(['course/' + course.id + '/delete']);
    }
    gotoEditCourse(course) {
        this.courseService.addCourseForEdit(course);
        this.router.navigate(['course/' + course.id + '/edit']);
    }
    ngOnInit() {
        if (this.auth.isAuthenticated()) {
            this.courseService.getCourses().subscribe((courses: Course[]) => {
                this.courses = courses;
            }, (err) => {
                console.log(err)
            });
        } else {
            this.courseService.getCourses()
                .subscribe((courses: Course[]) => {
                    this.courses = courses.filter((course) => course.visible)
                }, (err) => {
                    console.log(err)
                });
        }
    }


}
