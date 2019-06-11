import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CourseService } from "../course.service";
import { Course } from "../course.model";
import { NotificationsService } from "angular2-notifications";

@Component({
    selector: 'app-delete-course',
    templateUrl: './delete.component.html',
    styleUrls: ['./delete.component.css']
})
export class DeleteCourseComponent implements OnInit {
    course = new Course();
    confirmation = this.confirmation;
    public options = {
        position: ["top"],
        timeOut: 5000,
        lastOnBottom: false

    }
    constructor(private router: Router, private courseService: CourseService, private notification: NotificationsService) {

    }
    ngOnInit() {
        this.course = this.courseService.getCourseForDelete();
    }
    gotoList() {
        if(this.router.url.slice(0, 5)==='/top/'){
            this.router.navigate(["top"]);
        }
        if(this.router.url.slice(0, 5)==='/cour'){
            this.router.navigate(["courses"]);
        }
    }
    onDelete() {

        this.courseService.deleteCourse(this.course).subscribe((response) => {
            this.notification.success(
                'Deleted',
                '',
                {
                    timeOut: 2000,
                    showProgressBar: true,
                    pauseOnHover: true,
                    clickToClose: true,
                    maxLength: 10
                }
            )
            this.confirmation = null;



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
