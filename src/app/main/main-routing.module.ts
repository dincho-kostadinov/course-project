import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home-page/home-page.component";
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found-page/not-found.component";

const routes = [
  { path: "", component: HomeComponent },
  { path: "**", component: NotFoundComponent }

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class MainRoutingModule { }
