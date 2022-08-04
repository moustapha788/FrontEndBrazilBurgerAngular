import { Component, Input, OnInit,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';
import { MenuService } from 'src/app/services/menu/menu.service';
import { PanierService } from 'src/app/services/panier/panier.service';
import { TransformationService } from 'src/app/services/transformation/transformation.service';
import { Burger } from 'src/models/Burger';
import { ICatalogue } from 'src/models/ICatalogue';
import { Menu } from 'src/models/Menu';
import { BoissonMenu, BurgerMenu, FriteMenu } from 'src/models/SubProduct';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class ShowProductComponent implements OnInit {
  produit!: Menu | Burger;
  id: number = +this.router.snapshot.params["id"];

  burgersDuMenu: BurgerMenu[] = [];
  fritesDuMenu: FriteMenu[] = []
  boissonsDuMenu: BoissonMenu[] = []


  constructor(private router: ActivatedRoute, private dataService: DataService, private transformationService: TransformationService, private panierService: PanierService, private routerExterne: Router,private menuService:MenuService) { }

  ngOnInit(): void {

    this.dataService.getProduits().pipe(
      take(1),
      map((iCata: ICatalogue) => {
        // console.log(iCata);
        iCata.burgers.forEach((product: Burger) => {
          if (this.id == product.id) {
            this.produit = product;

            // console.log("le Burger en question : ",product);
            return;
          }
        });
        iCata.menus.forEach((product: Menu) => {
          if (this.id == product.id) {
            this.produit = product;
            this.burgersDuMenu = product.burgers;
            this.fritesDuMenu = product.frites;
            this.boissonsDuMenu = product.tailles
            this.menuService.recupeBoisson(this.boissonsDuMenu);


            // console.log("le Menu en question : ", product);
            // console.log("les burgers de ce menu : ",this.burgersDuMenu);
            // console.log("les boissons de ce menu : ", this.boissonsDuMenu);
            return;
          }
        });

        // localStorage.setItem('products', JSON.stringify(iCata));
      })

    ).subscribe()
    


  }

  


  showTitle(product: any): string {
    return this.isMenu(product) ? "Détail Menu" : "Détail Burger";
  }
  isMenu(product: any) {
    return product.burgers ? true : false;

  }

  afficheImage(img_url: string) {
    return this.transformationService.transform(img_url);

  }

  addToBasket(product: any) {
    if (this.validAdd(product)) {
      this.panierService.puttingToPanier(product);
      this.routerExterne.navigateByUrl("panier");
    } else {
      alert("il s'agit d'un menu veillez choisir le type de boisson")
    }
  }
  seeToBasket() {
    this.routerExterne.navigateByUrl("panier");

  }
  isAlreadyinBasket(product: Menu | Burger): boolean {
    return this.panierService.isAlreadyInBasket(product);
  }
  validAdd(product: any) {
    return this.isMenu(product) ? false : true;
  }

}
