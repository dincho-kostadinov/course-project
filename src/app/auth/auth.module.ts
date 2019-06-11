import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthService } from "./auth.service";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AuthRoutingModule,
    SimpleNotificationsModule.forRoot()
  ],
  declarations: [LoginComponent,RegisterComponent],
  providers:[AuthService]
})
export class AuthModule { }
