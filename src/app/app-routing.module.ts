import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListItemsComponent } from './components/list-items/list-items.component'
import { CartPageComponent } from './components/cart-page/cart-page.component'
import { BuyPageComponent } from './components/buy-page/buy-page.component'

import { SellItemsComponent } from './components/sell-items/sell-items.component';
import { ConfirmSellerComponent } from './components/confirm-seller/confirm-seller.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

const routes: Routes = [
  {
    path: 'b',
    component: AppComponent
  },
  {
    path: 'list',
    component: ListItemsComponent
  },
  {
    path: 'cart',
    component: CartPageComponent
  },
  {
    path: 'buy',
    component: BuyPageComponent
  },
  {
    path: 'sell',
    component: SellItemsComponent
  },
  {
    path: 'confirm_seller',
    component: ConfirmSellerComponent
  },
  {
    path: 'userinfo',
    component: UserInfoComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
