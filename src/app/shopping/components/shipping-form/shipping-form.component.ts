import { OrderService } from '../../../shared/services/order.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Order } from '../../../shared/models/order';
import { ShoppingCart } from '../../../shared/models/shopping-cart';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping = {name: '', addressLine1: '', addressLine2: '', city: ''};

  userId: string;
  authSubscription: Subscription;

  constructor(private authService: AuthService,
    private router: Router,
    private orderService: OrderService) {}

  ngOnInit() {
    this.authSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/orders-success', result.key]);
  }

}
