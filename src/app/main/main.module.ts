import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home-page/home-page.component";
import { MainRoutingModule } from "./main-routing.module";
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found-page/not-found.component";

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule
  ],
  declarations: [HomeComponent, NavComponent, NotFoundComponent],
  exports: [NavComponent]
})
export class MainModule { }
