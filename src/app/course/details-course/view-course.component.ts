import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { CourseService } from "../course.service";
import { Course } from "../course.model";

@Component({
    selector: 'app-view-course',
    templateUrl: './view-course.component.html',
    styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {
    course = new Course();
    previousUrl: string;
    constructor(private router: Router, private courseService: CourseService) {

    }
    ngOnInit() {
        this.course = this.courseService.getCourseForView();
    }
    onRate(raitng) {
        if (raitng === '1') {
            this.course.overall = {
                one: this.course.overall.one++,
                two: this.course.overall.two,
                three: this.course.overall.three,
                four: this.course.overall.four,
                five: this.course.overall.five,

            }
            this.course.overall.one++

        }
        if (raitng === '2') {
            this.course.overall = {
                one: this.course.overall.one,
                two: this.course.overall.two++,
                three: this.course.overall.three,
                four: this.course.overall.four,
                five: this.course.overall.five,

            }
            this.course.overall.two++

        }
        if (raitng === '3') {
            this.course.overall = {
                one: this.course.overall.one,
                two: this.course.overall.two,
                three: this.course.overall.three++,
                four: this.course.overall.four,
                five: this.course.overall.five,

            }
            this.course.overall.three++

        }
        if (raitng === '4') {
            this.course.overall = {
                one: this.course.overall.one,
                two: this.course.overall.two,
                three: this.course.overall.three,
                four: this.course.overall.four++,
                five: this.course.overall.five,

            }
            this.course.overall.four++

        }
        if (raitng === '5') {
            this.course.overall = {
                one: this.course.overall.one,
                two: this.course.overall.two,
                three: this.course.overall.three,
                four: this.course.overall.four,
                five: this.course.overall.five++,

            }
            this.course.overall.five++

        }
        this.courseService.EditCourse(this.course).subscribe((response) => {
            console.log('rated')
        }, (err) => {
            console.log('err')
        });

    }
    gotoList() {
        if (this.router.url.slice(0, 5) === '/top/') {
            this.router.navigate(["top"]);
        }
        if (this.router.url.slice(0, 5) === '/cour') {
            this.router.navigate(["courses"]);
        }

    }
}
