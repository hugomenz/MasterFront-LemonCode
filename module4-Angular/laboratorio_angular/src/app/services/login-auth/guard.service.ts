import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthLoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class GuardService {
  loginSuccessful: boolean = false;

  constructor(
    private router: Router,
    private authLoginService: AuthLoginService
  ) {
    this.authLoginService.isLogged() === true
      ? (this.loginSuccessful = true)
      : (this.loginSuccessful = false);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.loginSuccessful) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
