import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { NotificationsService } from "angular2-notifications";
import { CourseService } from "../course.service";
import { Course } from "../course.model";


@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.css']
})
export class CourseComponent {
    courseGroup: FormGroup;
    course: Course;
    public options = {
        position: ["top"],
        timeOut: 5000,
        lastOnBottom: false

    }
    constructor(private router: Router, private courseService: CourseService, private notification: NotificationsService) {
        this.courseGroup = new FormGroup({
            name: new FormControl('', [Validators.minLength(10), Validators.required]),
            category: new FormControl('', [Validators.minLength(4), Validators.required]),
            teacherName: new FormControl('', [Validators.minLength(4), Validators.required]),
            teacherEmail: new FormControl('', [Validators.email, Validators.required]),
            description: new FormControl('', [Validators.required]),
            language: new FormControl('', [Validators.required]),
            img: new FormControl('', Validators.pattern(/https?:\/\/.+/)),
            visible: new FormControl(),

        });

    }
    gotoList() {
        this.router.navigate(["courses"]);
    }

    onSubmit() {
        this.course = new Course(
            null,
            this.courseGroup.value.name,
            this.courseGroup.value.category,
            this.courseGroup.value.teacherName,
            this.courseGroup.value.teacherEmail,
            this.courseGroup.value.description,
            this.courseGroup.value.language,
            this.courseGroup.value.img,
            {one:1,two:0,three:0,four:0,five:0,},
            this.courseGroup.value.visible,
            new Date().getTime(),
            new Date().getTime(),
        );
        this.courseService.saveCourse(this.course).subscribe((response) => {
            this.notification.success(
                'Added',
                '',
                {
                    timeOut: 2000,
                    showProgressBar: true,
                    pauseOnHover: true,
                    clickToClose: true,
                    maxLength: 10
                }
            )
            this.courseGroup.reset();

        }, (err) => {
            this.notification.error(
                'Error',
                '',
                {
                    timeOut: 2000,
                    showProgressBar: true,
                    pauseOnHover: true,
                    clickToClose: true,
                    maxLength: 10
                }
            )
        });
    }
}
