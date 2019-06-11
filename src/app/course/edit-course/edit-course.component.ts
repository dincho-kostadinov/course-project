import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CourseService } from "../course.service";
import { Course } from "../course.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NotificationsService } from "angular2-notifications";


@Component({
    selector: 'app-edit-course',
    templateUrl: './edit-course.component.html',
    styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
    courseGroup: FormGroup;
    course = new Course();
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
    onSubmit() {
        this.course.lastUpdate = new Date().getTime();
        this.courseService.EditCourse(this.course).subscribe((response) => {
            this.notification.success(
                'Updated',
                '',
                {
                    timeOut: 2000,
                    showProgressBar: true,
                    pauseOnHover: true,
                    clickToClose: true,
                    maxLength: 10
                }
            )
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
    ngOnInit() {
        this.course = this.courseService.getCourseForEdit();
    }
    gotoList() {
        if(this.router.url.slice(0, 5)==='/top/'){
            this.router.navigate(["top"]);
        }
        if(this.router.url.slice(0, 5)==='/cour'){
            this.router.navigate(["courses"]);
        }
    }

}
