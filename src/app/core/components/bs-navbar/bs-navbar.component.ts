import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { AppUser } from '../../../shared/models/app-user';
import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  constructor(private authService: AuthService, private cartService: ShoppingCartService, private router: Router) {}

  async ngOnInit() {
    this.authService.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = await this.cartService.getCart();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
