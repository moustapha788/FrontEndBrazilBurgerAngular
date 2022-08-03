import { Component, Input, OnInit } from '@angular/core';
import { TransformationService } from 'src/app/services/transformation/transformation.service';
import { Boisson } from 'src/models/Boisson';
import { BoissonMenu } from 'src/models/SubProduct';

@Component({
  selector: 'app-boisson',
  templateUrl: './boisson.component.html',
  styleUrls: ['./boisson.component.css']
})
export class BoissonComponent implements OnInit {

  @Input()
  boissons!: BoissonMenu;

  mesInputs = document.getElementsByClassName("taille")




  constructor(private transformationService: TransformationService) { }


  ngOnInit(): void {
    console.log(this.mesInputs);
  }

  afficheImage(img_url: string) {
    return this.transformationService.transform(img_url);
  }
}
