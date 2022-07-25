import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgerComponent } from './burger/burger.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShowBurgerComponent } from './show-burger/show-burger.component';
import { TestFormComponent } from './test-form/test-form.component';

export const ROUTES: Routes = [
  {
    path: "",
    component: CatalogueComponent,
    title:"accueil"
  },
  {
    path: "home",
    redirectTo: ""
  },
  {
    path: "catalogue",
    redirectTo: ""

    // component: CatalogueComponent,
    // title:"catalogue"

  },
  {
    path: "burger",
    component: BurgerComponent,
    title:"burger"

  },
  {
    path: "burger/:id",
    component: ShowBurgerComponent,
    title:"burger"

  },
  {
    path: "menu",
    component: BurgerComponent,
    title:"menu"

  },
  {
    path: "test",
    component: TestFormComponent,
    title:"test"

  },
  {
    path: "404",
    component: NotFoundComponent,
    title:"page not found"

  },
  {
    path: "**",
    redirectTo: ("/404"),

  }
];





@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
