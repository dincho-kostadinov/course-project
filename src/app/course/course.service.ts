import { Course } from './course.model';
import { Http } from '@angular/http'
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../auth/auth.service";
import 'rxjs/Rx'
@Injectable()
export class CourseService {
    courseForEdit = new Course();
    courseForDelete = new Course();
    courseForView=new Course();
    constructor(private http: Http, private auth: AuthService) {

    }

    saveCourse(course: Course) {
        const token = this.auth.getToken();
        return this.http.post('https://online-academy-c8250.firebaseio.com/data.json?auth=' + token, course);

    }
    getCourses() {
        
            return this.http.get('https://online-academy-c8250.firebaseio.com/data.json').map((response) => {
              const coursesData = response.json() || [];
              const courses: Course[] = Object.keys(coursesData).map((courseId: string) => {
                const courseData: Course = coursesData[courseId];
                const course = new Course(
                  courseId,
                  courseData.name,
                  courseData.category,
                  courseData.teacherName,
                  courseData.teacherEmail,
                  courseData.description,
                  courseData.language,
                  courseData.img,
                  courseData.overall,
                  courseData.visible,
                  courseData.creationDate,
                  courseData.lastUpdate
                );
                return course;
              });
              return courses;
            });
          
    }
    addCourseForView(course){
        this.courseForView=course;
    }
    getCourseForView(){
        return this.courseForView;
    }
    addCourseForDelete(course){
        this.courseForDelete=course;
    }
    getCourseForDelete(){
        return this.courseForDelete;
    }
    addCourseForEdit(course){
        this.courseForEdit=course;
    }
    getCourseForEdit(){
        return this.courseForEdit;
    }
    deleteCourse(course){
        const courseId=course.id;
        return this.http.delete('https://online-academy-c8250.firebaseio.com/data/'+courseId+'.json');
    }
    EditCourse(course){
        const courseId=course.id;
        console.log(courseId)
        return this.http.put('https://online-academy-c8250.firebaseio.com/data/'+courseId+'.json',course);
    }


}
