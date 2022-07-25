import { ViewEncapsulation } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Burger } from 'src/models/Burger';
import { Menu } from 'src/models/Menu';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {

  @Input()
  burgers!: Burger[];

  @Input()
  menus!: Menu[];
  constructor() { }

  ngOnInit(): void {
    this.burgers =
      [
        {
          id: 1,
          nom: "Burger royal",
          prix: 1500,
          image: "../../assets/images/burgers/burger-1.jpg",
        },

        {
          id: 2,
          nom: "Burger double",
          prix: 2000,
          image: "../../assets/images/burgers/burger-2.jpg",
        },
        {
          id: 1,
          nom: "Burger triple",
          prix: 4500,
          image: "../../assets/images/burgers/burger-3.jpeg",
        }
        ,
        {
          id: 1,
          nom: "Burger Senegal",
          prix: 4500,
          image: "../../assets/images/burgers/burger-4.jpg",
        },
        {
          id: 1,
          nom: "Burger adama",
          prix: 4500,
          image: "../../assets/images/burgers/burger-5.jpg",
        },
        {
          id: 1,
          nom: "Burger Der",
          prix: 4500,
          image: "../../assets/images/burgers/burger-6.jpg",
        }
      ];
    /* 
    id: number,
        nom: string,
        burgers: Burger[],
        boissons: Boisson[]
        image: string
        prix: number,
    */
    this.menus =
      [
        {
          id: 1,
          nom: "Menu royal",
          burgers: [],
          boissons: [],
          image: "../../assets/images/menus/menu-burger-1.jpeg",
          prix: 1500
        },
        {
          id: 1,
          nom: "Menu double",
          burgers: [],
          boissons: [],
          image: "../../assets/images/menus/menu-burger-2.jpg",
          prix: 1500
        },
        {
          id: 1,
          nom: "Menu triple",
          burgers: [],
          boissons: [],
          image: "../../assets/images/menus/menu-burger-2.jpg",
          prix: 4500
        }
      ]
}
}
