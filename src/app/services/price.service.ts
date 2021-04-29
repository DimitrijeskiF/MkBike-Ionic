import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PriceService {
  BACKEND_URL = environment.uri;
  constructor(
    private http: HttpClient
  ) { }


  getPricesForYoung() {
    return this.http.get<{ price: any }>(this.BACKEND_URL + '/prices/young')
  }

  getPricesForWorker() {
    return this.http.get<{ price: any }>(this.BACKEND_URL + '/prices/worker')
  }
  getPricesForRetiree() {
    return this.http.get<{ price: any }>(this.BACKEND_URL + '/prices/retiree')
  }
}
