import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { from, Observable, of } from 'rxjs';
import { Burger } from 'src/models/Burger';
import { Commande } from 'src/models/Commande';
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

  postCommande(commande: Commande) {
    // const headers = { 'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTk2MjAzMDEsImV4cCI6NTI1OTYyMDMwMSwicm9sZXMiOlsiUk9MRV9DTElFTlQiLCJST0xFX1ZJU0lURVVSIl0sInVzZXJuYW1lIjoic2FsbEBnbWFpbC5jb20ifQ.zvflvyKzZkB-YDhCvRE6lPGgFGczIB22rrhhZVowG1pEksHaXxK-n_Oqm-g82g29TedJjNEfcx8RVQybefCtPXzAg490I87_9-Ca8IefElLsyYsFJwS20ydO8T_iK_xN4ez2otmmVStxFHM86VTCilQ-kG-SyhrC-pHxK_1Yd3dSyCOxmp-RTtm60YbOYPXpHqn1X8B_lRGc6Wy6VDdE3QQLYZLCjfZ2Ep_Huk2Wj5mRle-Y9Lk5Hvd7ZYAQjq1cYIrAKWbIbRV4w02_jFcZP4gfhAZMydKqctHwG904N1GUIZhyF2dxheG46k1U1JOD-l_iRcojxU4lujkVxvwqjJ3YrPWwiXcjF4f_7Ev4k4j7G5vyLp3teyPkpY3rdce7n30GdRYWDwmYGsAQMf0iuNMt91DH8RajYAnvFixB2J25kAMxEOFeVUw8XNprUtvfNS9ho0p4GRmVV3n00MhJ89Kgwl-90wbTNQNtdz0QS-pml7ghWk0Qh6EVmtcsVCnB5msFSrsj160l5h8md1gZAUykf-VqVFZPj7AXawmqM2uK1nvomQ5FXypbzVN4A_WiO3X9yCPoFl46nMDC0EQxr5tC6nTRQkK7Rz-kKALqnp-BwJNoEW_UVIeOGXU4-GbcL1SrAWtHQAtH7Apx_LhLYSZOiVyMb9nsJnk9KDFYJSg', 'My-Custom-Header': 'foobar' };
    // this.http.post(this.commande_url, commande,{headers}).subscribe()
    this.http.post(this.commande_url, commande).subscribe()
  }

  getZones(): Observable<Zone[]> {
    return this.http.get<Zone[]>(this.zone_url);
  }


}
