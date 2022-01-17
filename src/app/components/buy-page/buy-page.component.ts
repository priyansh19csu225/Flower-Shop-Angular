import { Component, OnInit , Input} from '@angular/core';
import { CartService } from '../../core/data-service/cartService.Service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css']
})
export class BuyPageComponent implements OnInit {
  username: any;
  email: any;
  cartTotal: number = 0
  cartProductsList: any = []
  constructor(public CartProducts: CartService, private router: Router, private route: ActivatedRoute) {
    console.log(this.router.getCurrentNavigation().extras.state);
    this.username = this.route.snapshot.paramMap.get('username');
    this.username = this.router.getCurrentNavigation().extras.state.username;
    this.email = this.router.getCurrentNavigation().extras.state.email;
    console.log(this.username);
   }

  ngOnInit() {
    this.CartProducts.currentCartTotal.subscribe(total => this.cartTotal = total)
    this.CartProducts.currentProducts
      .subscribe(products => this.cartProductsList = products)
  }

}
