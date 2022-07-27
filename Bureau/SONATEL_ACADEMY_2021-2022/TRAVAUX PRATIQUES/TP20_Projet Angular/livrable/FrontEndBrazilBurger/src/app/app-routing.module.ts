import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgerComponent } from './burger/burger.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ShowProductComponent } from './catalogue/show-product/show-product.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PanierComponent } from './panier/panier.component';
import { TestFormComponent } from './test-form/test-form.component';

export const ROUTES: Routes = [
  {
    path: "",
    component: CatalogueComponent,
    title: "accueil",
  },
  {
    path: "home",
    redirectTo: ""
  },
  {
    path: "catalogue",
    redirectTo: ""
  },
  {
    path: "panier",
    component: PanierComponent,
    title: "votre panier"
  },
  {
    path: "produit/:id",
    component: ShowProductComponent,
    pathMatch: "full"
  },
  {
    path: "test",
    component: TestFormComponent,
    title: "test"
  },
  {
    path: "404",
    component: NotFoundComponent,
    title: "page not found"
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



  // {
  //   path: "burger",
  //   component: BurgerComponent,
  //   title:"burger",
  //   children:[

  //       {
  //         path: "burger/:id",
  //         component: ShowBurgerComponent,
  //         title:"un burger",


  //       }

  //   ]

  // },