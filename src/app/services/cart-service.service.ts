import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  items = [];
  userList = [];

  constructor(
    private http: HttpClient
  ) {

   }

   getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  getPublicAPI() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
    //return this.http.get('/assets/shipping.json');
  }

}
