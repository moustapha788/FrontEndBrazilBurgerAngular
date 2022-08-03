import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { from, Observable, of } from 'rxjs';
import { Burger } from 'src/models/Burger';
import { ICatalogue } from 'src/models/ICatalogue';
import { Menu } from 'src/models/Menu';
import { Zone } from 'src/models/Zone';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  burgers!: Burger[];
  menus!: Menu[];
  private readonly catalogue_url = "http://localhost:8001/api/catalogues"
  private readonly produit_url = "http://localhost:8001/api/produits/"
  private readonly commande_url = "http://localhost:8001/api/commandes"
  private readonly zone_url = "http://localhost:8001/api/zones"

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {

  }
  getProduits(): Observable<ICatalogue> {

    return this.http.get<ICatalogue>(this.catalogue_url);

  }

  // getOneProduit(id: number)/* : Observable<Menu | Burger>  */{

  //   return this.http.get<any>(this.produit_url + '' + id);

  // }

  postCommande(commande: JSON) {
    this.http.post(this.commande_url, JSON.stringify(commande))
  }

  getZones(): Observable<Zone[]> {
    return this.http.get<Zone[]>(this.zone_url);
  }


}
