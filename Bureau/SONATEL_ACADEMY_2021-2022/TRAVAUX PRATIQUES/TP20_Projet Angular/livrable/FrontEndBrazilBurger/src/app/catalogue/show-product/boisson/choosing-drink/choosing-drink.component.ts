import { Component, Input, OnInit } from '@angular/core';
import { TransformationService } from 'src/app/services/transformation/transformation.service';
import { Boisson, SousBoisson } from 'src/models/Boisson';

@Component({
  selector: 'app-choosing-drink',
  templateUrl: './choosing-drink.component.html',
  styleUrls: ['./choosing-drink.component.css']
})
export class ChoosingDrinkComponent implements OnInit {

  @Input()
  drink !: SousBoisson;
  constructor(private transformationService: TransformationService) { }

  ngOnInit(): void {
  }

  afficheImage(img_url: string) {
    return this.transformationService.transform(img_url);
  }

  manipQte(qteBoissonChoisis: any) {

  }

  moins(boisson: Boisson, inputQte: any) {
    if (inputQte.value <= 0) {
      inputQte.value = 0;
      return;
    }
    inputQte.value = --inputQte.value;


  }
  plus(boisson: Boisson, inputQte: any) {
    if (inputQte.value > 10) {
      inputQte.value = 10;
      return;
    }
    inputQte.value = ++inputQte.value;
    
  }

  
}
