import { NgModule } from '@angular/core';
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
import { ShowBurgerComponent } from './show-burger/show-burger.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    NotFoundComponent,
    HomeComponent,
    CatalogueComponent,
    TestFormComponent,
    MainHeaderComponent,
    MainFooterComponent,
    ShowBurgerComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    // AppRoutingModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
