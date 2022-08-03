import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Zone } from 'src/models/Zone';
import { DataService } from '../services/data/data.service';
import { PanierService } from '../services/panier/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  items$: Observable<any> = this.panierService.items$
  @Output()
  priceWithoutDelivering: number = 12000;
  zones!: Zone[]

  constructor(private panierService: PanierService, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getZones().subscribe((data: any) => {
      this.zones = data;
    });
  }

  getPrixCommande() {
    this.priceWithoutDelivering = this.panierService.calculerPrixTotal()
    return this.priceWithoutDelivering;
  }

  zoneSelected(selection: HTMLSelectElement) {
    if (!selection.value) {
      return false;
    } else {
      if (+selection.value >= 1 || +selection.value <= this.zones.length) {
        return true;
      } else {
        return false;
      }
    }
  }
  estAEmporter(emporter: HTMLInputElement): boolean {
    if (emporter.checked) {
      return true
    } else {
      return false;
    }
  }
  estALivrer(livrable: HTMLInputElement): boolean {
    if (livrable.checked) {
      return true
    } else {
      return false;
    }
  }

  checkedLivrable(livrable: HTMLInputElement): string {
    if (this.estALivrer(livrable)) {
      return "block";
    } else {
      return "none";
    }
  }




  deliveryModeIschecked(livrable: HTMLInputElement, emporter: HTMLInputElement, selection: HTMLSelectElement) {
    if (this.estAEmporter(emporter) == true) {
      return true;
    } else if (this.zoneSelected(selection)) {
      return true;
    }
    else {
      return false;
    }
  }

  nePeutCommander(livrable: HTMLInputElement, emporter: HTMLInputElement, selection: HTMLSelectElement) {

    if (this.deliveryModeIschecked(livrable, emporter, selection) && this.getPrixCommande() > 0) {
      return false;
    }
    return true;

  }

  commander(){
  //   let body={
  //     Produits: [
  //         {
  //             quantite: 1,
  //             produit: "/api/burgers/1"
  //         },
  //         {
  //             quantite: 3,
  //             produit: "/api/boissons/13"
  //         }
  //     ]
  // }
  //   this.dataService.postCommande(body)
  }

}


