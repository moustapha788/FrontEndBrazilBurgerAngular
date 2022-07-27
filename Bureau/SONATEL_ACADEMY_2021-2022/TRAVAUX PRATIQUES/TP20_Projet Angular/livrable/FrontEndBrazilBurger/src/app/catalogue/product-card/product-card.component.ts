import { Component, Input, OnInit, ViewChildren } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BurgerComponent } from 'src/app/burger/burger.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { PanierComponent } from 'src/app/panier/panier.component';
import { PanierService } from 'src/app/services/panier/panier.service';
import { Burger } from 'src/models/Burger';
import { Menu } from 'src/models/Menu';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input()
  produit!: Burger | Menu;
  disabled:boolean=true;
  constructor(private router: Router, private sanitizer: DomSanitizer, private panierService: PanierService) { }

  ngOnInit(): void {
  }

  show(): any {

    this.router.navigateByUrl(`produit/${this.produit.id}`)

  }
  addToBasket(product:any) {
    // alert("vous avez ajouter au panier ou retirer du panier ")
    this.panierService.addToPanier(product);
    this.disabled=false;


    // if(this.produit)
  }
  // transform() {
  //   let url = this.sanitizer.bypassSecurityTrustResourceUrl(this.produit.image[0]);
  //   return url;
  // }

}
