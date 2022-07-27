import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { from, Observable, of } from 'rxjs';
import { Burger } from 'src/models/Burger';
import { ICatalogue } from 'src/models/ICatalogue';
import { Menu } from 'src/models/Menu';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  burgers!: Burger[];
  menus!: Menu[];
  private readonly catalogue_url = "http://localhost:8001/api/catalogues"
  private readonly produit_url = "http://localhost:8001/api/produits/"

  constructor(private http: HttpClient,private sanitizer:DomSanitizer) {

  }
  getProduits(): Observable<ICatalogue> {

    return this.http.get<ICatalogue>(this.catalogue_url);

  }

  getOneProduit(id: number): Observable<Menu | Burger> {

    return this.http.get<any>(this.produit_url + '' + id);

  }


  getAllBurgers(): Observable<Burger> {

    // this.burgers =
    return from(this.burgers);
  }
  getBurger(id: number): any {
    return this.burgers.find(params => params.id === id);

  }
  getAllMenus(): Observable<Menu> {

    return from(this.menus);


  }
  getMenu(id: number) {
    return this.menus.find(params => params.id === id);
  }
  blobToString() {
    var reader = new FileReader();
    this.getProduits().forEach((d)=>{
      // reader.readAsDataURL(d.menus)
    })
    
  }

  transform(prod:Menu|Burger){
    let url =this.sanitizer.bypassSecurityTrustResourceUrl(prod.image[0]);
    return url;
}

}
