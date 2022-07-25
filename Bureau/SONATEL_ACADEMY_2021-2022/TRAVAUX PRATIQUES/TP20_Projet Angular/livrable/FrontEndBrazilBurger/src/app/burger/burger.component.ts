import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Burger } from 'src/models/Burger';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {
  @Input()
  burger!:Burger;

  constructor(private router:Router) { }

  ngOnInit(): void {
    // this.burger
  }

  show(){
    this.router.navigateByUrl(`burger/${this.burger.id}`)
  }

}
