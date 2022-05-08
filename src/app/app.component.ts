import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  currentUser: string;
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
    console.log(localStorage.getItem('token'));
    this.authService.currentUser.subscribe((x) => (this.currentUser = x));
    console.log(this.currentUser);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
