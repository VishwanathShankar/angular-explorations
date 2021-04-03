import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-ajax-component',
  templateUrl: './ajax-component.component.html',
  styleUrls: ['./ajax-component.component.css']
})
export class AjaxComponentComponent implements OnInit {
  shippingCosts: any;
  usersList: User[];
  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
    this.cartService.getPublicAPI().subscribe(data => 
      {
        this.usersList = data;
      });
  }

}
