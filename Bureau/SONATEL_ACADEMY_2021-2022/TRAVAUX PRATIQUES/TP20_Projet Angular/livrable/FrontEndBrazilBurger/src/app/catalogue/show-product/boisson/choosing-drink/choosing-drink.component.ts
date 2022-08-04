import { ViewEncapsulation } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { TransformationService } from 'src/app/services/transformation/transformation.service';
import { Boisson, SousBoisson } from 'src/models/Boisson';

@Component({
  selector: 'app-choosing-drink',
  templateUrl: './choosing-drink.component.html',
  styleUrls: ['./choosing-drink.component.css'],
  encapsulation: ViewEncapsulation.Emulated 

})
export class ChoosingDrinkComponent implements OnInit {

  @Input()
  drink !: SousBoisson;
  constructor(private transformationService: TransformationService, private menuservice: MenuService) { }

  ngOnInit(): void {
  }

  afficheImage(img_url: string) {
    return this.transformationService.transform(img_url);
  }

  manipQte(inputQte: any) {
    console.log(inputQte.value);

  }

  moins(boisson: Boisson, inputQte: any) {
    if (inputQte.value <= 0) {
      inputQte.value = 0;
      return;
    }
    inputQte.value = --inputQte.value;
    // console.log(inputQte.value);
    this.menuservice.gestionQte(inputQte.value)



  }
  plus(boisson: Boisson, inputQte: any) {
    if (inputQte.value > 10) {
      inputQte.value = 10;
      return;
    }
    inputQte.value = ++(inputQte.value);
    // console.log(inputQte.value);
    this.menuservice.gestionQte(inputQte.value)

  }
  // normalQte(qte: number, qteTotal: number) {
  //   this.menuservice.normalQuantite(qte, qteTotal);
  // }


}
