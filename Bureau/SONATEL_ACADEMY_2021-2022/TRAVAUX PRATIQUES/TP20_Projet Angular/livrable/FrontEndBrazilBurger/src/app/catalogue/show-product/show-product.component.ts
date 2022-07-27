import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BurgerComponent } from 'src/app/burger/burger.component';
import { DataService } from 'src/app/services/data/data.service';
import { Burger } from 'src/models/Burger';
import { Menu } from 'src/models/Menu';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  produit!: Menu | Burger;
  id: number = +this.router.snapshot.params["id"];;
  constructor(private router: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getOneProduit(this.id).subscribe(
      (data: Menu | Burger) => {
        this.produit = data;
      }
    )
  }
  showTitle(): any {
    console.log(this.produit);

    // if(this.produit.burger) return false;
  }

}
