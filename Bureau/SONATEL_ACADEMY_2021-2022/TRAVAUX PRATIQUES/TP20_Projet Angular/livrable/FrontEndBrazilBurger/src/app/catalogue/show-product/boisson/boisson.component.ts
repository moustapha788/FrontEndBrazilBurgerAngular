import { ViewEncapsulation } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { TransformationService } from 'src/app/services/transformation/transformation.service';
import { Boisson } from 'src/models/Boisson';
import { BoissonMenu } from 'src/models/SubProduct';

@Component({
  selector: 'app-boisson',
  templateUrl: './boisson.component.html',
  styleUrls: ['./boisson.component.css'],
  encapsulation: ViewEncapsulation.Emulated


})
export class BoissonComponent implements OnInit {

  @Input()
  boissons!: BoissonMenu;
  theQuantityOfModel: number = 0;


  constructor(private transformationService: TransformationService, private menuService: MenuService) {
  }


  ngOnInit(): void {

    this.mesInputs()
    // console.log(this.boissons);

  }

  afficheImage(img_url: string) {
    return this.transformationService.transform(img_url);
  }

  normalQte() {
    return this.menuService.boissonMenu
  }

  mesInputs() {
    this.menuService.mesInputs = this.menuService.returnMesInputs(this.boissons);    
  }
}
