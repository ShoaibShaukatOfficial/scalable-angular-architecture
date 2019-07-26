import { Component } from '@angular/core';
import { Auth0Service } from './core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-8-boilerplate-modulebased';
  constructor(public auth: Auth0Service) {
    auth.handleAuthentication();
  }
}
