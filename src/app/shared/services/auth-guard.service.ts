import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { RouterStateSnapshot } from '@angular/router/src/router_state';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
    return this.authService.user$.map(user => {
      if (user) {
        return true;
      }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } } );
    return false;
    });

  }

}
