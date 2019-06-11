import { Component } from '@angular/core';
import { AuthService } from "../../auth/auth.service";
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    animations: [
        
        trigger('explainerAnim', [
            transition('* => *', [
              query('.home-page-content,.panel-body,div', style({ opacity: 0, transform: 'translateX(-40px)' })),
      
              query('.home-page-content,.panel-body,div', stagger('300ms', [
                animate('500ms 0.8s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
              ])),
      
              query('.home-page-content,.panel-body,div', [
                animate(1000, style('*'))
              ])
              
            ])
          ])
        
            ]
})
export class HomeComponent {
    constructor(private auth: AuthService) {

    }

}
