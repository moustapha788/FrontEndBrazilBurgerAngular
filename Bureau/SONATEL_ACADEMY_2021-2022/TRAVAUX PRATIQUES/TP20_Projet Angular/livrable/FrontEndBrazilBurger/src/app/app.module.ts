import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgerComponent } from './burger/burger.component';
import { ROUTES } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { TestFormComponent } from './test-form/test-form.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MenuComponent } from './menu/menu.component';
import { PanierComponent } from './panier/panier.component';
import { ListBurgerComponent } from './list-burger/list-burger.component';
import { ProductCardComponent } from './catalogue/product-card/product-card.component';
import { ShowProductComponent } from './catalogue/show-product/show-product.component';
import { SubProductComponent } from './catalogue/show-product/sub-product/sub-product.component';
import { LandingPageComponent } from './landing-page/landing-page.component';



@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    NotFoundComponent,
    HomeComponent,
    TestFormComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MenuComponent,
    PanierComponent,
    CatalogueComponent,
    ListBurgerComponent,
    ProductCardComponent,
    ShowProductComponent,
    SubProductComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    // AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
