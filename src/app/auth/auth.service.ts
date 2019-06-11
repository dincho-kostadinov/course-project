import * as firebase from 'firebase';
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { NotificationsService } from "angular2-notifications";
@Injectable()
export class AuthService {
    token: string;
    constructor(private router: Router, private notification: NotificationsService) {

    }
    register(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((response) => {

                this.notification.success(
                    'You are registered ! Please Login',
                    response.message,
                    {
                        timeOut: 2000,
                        showProgressBar: true,
                        pauseOnHover: true,
                        clickToClose: true,
                        maxLength: 10
                    }
                )

                this.router.navigate(['/login'])
            })
            .catch((err) => {
                console.log(err.message)
                this.notification.error(
                    'Error',
                    err.message,
                    {
                        timeOut: 2000,
                        showProgressBar: true,
                        pauseOnHover: true,
                        clickToClose: true,
                        maxLength: 70
                    }
                )
            })
    }
    login(email: string, password: string) {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
                this.notification.success(
                    'Welcome',
                    '',
                    {
                        timeOut: 1000,
                        showProgressBar: true,
                        pauseOnHover: true,
                        clickToClose: true,
                        maxLength: 10
                    }
                )
                this.router.navigate([''])
                firebase.auth().currentUser.getToken()
                    .then((token) => {
                        this.token = token;
                        this.notification.success(
                            'Welcome',
                            '',
                            {
                                timeOut: 2000,
                                showProgressBar: true,
                                pauseOnHover: true,
                                clickToClose: true,
                                maxLength: 10
                            }
                        )
                    })
                    .catch((err) => {
                        this.notification.error(
                            'Error',
                            err.message,
                            {
                                timeOut: 2000,
                                showProgressBar: true,
                                pauseOnHover: true,
                                clickToClose: true,
                                maxLength: 70
                            }
                        )
                    })
            })
            .catch((err) => {
                this.notification.error(
                    'Error',
                    err.message,
                    {
                        timeOut: 2000,
                        showProgressBar: true,
                        pauseOnHover: true,
                        clickToClose: true,
                        maxLength: 70
                    }
                )
            })
    }
    getToken() {
        firebase.auth().currentUser.getToken()
            .then((token) => {
                this.token = token;
            })
            .catch((err) => {
                console.log(err)
            })
        return this.token;
    }
    isAuthenticated(): boolean {
        return this.token != null;
    }
    logout() {
        firebase.auth().signOut();
        this.router.navigate([''])
        this.token = null;
    }
}