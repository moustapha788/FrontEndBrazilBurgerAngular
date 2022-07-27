import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/models/Menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // @Input() 
  // menu!:Menu;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  show() {
    // this.router.navigateByUrl(`menu/${this.menu.id}`)

  }

}
