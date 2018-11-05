import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/shared/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private url: string;

  constructor(private router: Router, private auth: AuthService) {}

  private handleAuthState(): boolean {
    if (this.isLoginOrRegister()) {
      this.router.navigate(['/rentals']);
      return false;
    }

    return true;
  }
  private handleNotAuthState(): boolean {
    if (this.isLoginOrRegister()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
  private isLoginOrRegister(): boolean {
    if (this.url.includes('login') || this.url.includes('register')) {
      return true;
    }
    return false;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.url = state.url;

    if (this.auth.isAuthenticated()) {
      return this.handleAuthState();
    }
    return this.handleNotAuthState();
  }
}
