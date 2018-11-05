import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../auth/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bwm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string;

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.username = this.auth.getUsername();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
