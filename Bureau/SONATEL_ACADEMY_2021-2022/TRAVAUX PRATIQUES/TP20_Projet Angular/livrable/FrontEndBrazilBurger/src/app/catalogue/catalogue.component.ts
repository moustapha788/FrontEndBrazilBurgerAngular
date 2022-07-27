import { ViewEncapsulation } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { map, take } from 'rxjs';
import { Burger } from 'src/models/Burger';
import { ICatalogue } from 'src/models/ICatalogue';
import { Menu } from 'src/models/Menu';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {

  burgers!: Burger[];
  menus!: Menu[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getProduits().pipe(
      // take(1),
      // map((iCata: ICatalogue) => {
      //  iCata.burgers.forEach(item =>{
      //   //  item.image[0]=this.dataService.transform(item.image[0])
      //  })
      // })

    ).
    subscribe(
      (i:any)=>{
         
        this.menus = i.menus;
        this.burgers = i.burgers;
      }
    );
  }
}
