import { Component } from '@angular/core';
import { AuthService } from "../auth.service";
import { NotificationsService } from "angular2-notifications";
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    
    trigger('explainerAnim', [
        transition('* => *', [
          query('.form-group,.btn,div', style({ opacity: 0, transform: 'translateX(-40px)' })),
  
          query('.form-group,.btn,div', stagger('300ms', [
            animate('500ms 0.8s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
          ])),
  
          query('.form-group,.btn,div', [
            animate(1000, style('*'))
          ])
          
        ])
      ])
    
        ]
})
export class RegisterComponent {
    auth:AuthService;
    public options = {
      position: ["top"],
      timeOut: 3000,
      lastOnBottom: false

  }
    constructor(auth:AuthService){
        this.auth=auth;
    }
  onSubmit(form){

    this.auth.register(form.value.email,form.value.password)
    form.reset();
  }
  
}
