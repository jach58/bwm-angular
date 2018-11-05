import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as jwt from 'jsonwebtoken';
import * as moment from 'moment';
import 'rxjs/add/operator/map';

class DecodedToken {
  exp = 0;
  username = '';
}

@Injectable()
export class AuthService {
  private decodedToken;

  constructor(private http: HttpClient) {
    this.decodedToken =
      JSON.parse(localStorage.getItem('bwm_meta')) || new DecodedToken();
  }

  private saveToken(token: string): string {
    this.decodedToken = jwt.decode(token);
    localStorage.setItem('bwm_auth', token);
    localStorage.setItem('bwm_meta', JSON.stringify(this.decodedToken));
    return token;
  }

  private getExpiration() {
    return moment.unix(this.decodedToken.exp);
  }

  public register(userData: any): Observable<any> {
    return this.http.post('/api/v1/users/register', userData);
  }

  public login(userData: any): Observable<any> {
    return this.http.post('/api/v1/users/auth', userData).map((token: any) => {
      return this.saveToken(token);
    });
  }

  public logout() {
    localStorage.removeItem('bwm_auth');
    localStorage.removeItem('bwm_meta');
    this.decodedToken = new DecodedToken();
  }

  public isAuthenticated(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  public getUsername(): string {
    return this.decodedToken.username;
  }

  public getAuthToken(): string {
    return localStorage.getItem('bwm_auth');
  }
}
