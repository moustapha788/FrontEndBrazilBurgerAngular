import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BoissonMenu } from 'src/models/SubProduct';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  boissonMenu: BoissonMenu[] = [];
  mesInputs: any = []

  // private qteSubject = new BehaviorSubject<number[]>([]);
  // itemQte$ = this.qteSubject.asObservable();

  constructor() {

  }


  gestionQte(qte: number)/*: boolean */ {

    for (let i = 0; i < this.boissonMenu.length; i++) {
      const tabInputs = this.mesInputs[i];
      const mesBoissons = this.boissonMenu[i];
      // console.log("tabInputs: ", tabInputs, "mesBoissons: ", mesBoissons);
      // console.log(this.sommation(tabInputs));

      if (this.sommation(tabInputs) <= mesBoissons.quantite) {
        return true
      }
    }
    return false;
  }

  sommation(inputsOfASize: any) {

    console.log(inputsOfASize);
    
    let qteTotalModel = 0;
    inputsOfASize.forEach((input: any) => {
      console.log(input.value);
      
      qteTotalModel += +input.value;
    })
    // console.log(qteTotalModel);
    return qteTotalModel;
  }
  recupeBoisson(boissonMenu: BoissonMenu[]) {
    this.boissonMenu = boissonMenu;
  }
  returnMesInputs(boissons: BoissonMenu) {
    const inputs=document.querySelectorAll("input[type=number]")
    // const inputs: any = document.querySelectorAll(".boisson"+boissons.drinkSize.modele+" input[type=number]")
    // console.log(inputs);
    this.mesInputs.push(inputs)
    // console.log(this.mesInputs);

    return this.mesInputs;
  }
}
