import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(){
    firebase.initializeApp(
      {
        apiKey: "AIzaSyAvOKbE_jbdXbn-RKcphd4YPx1iFE0bmQg",
        authDomain: "online-academy-c8250.firebaseapp.com",
      }
    )
  }
}
