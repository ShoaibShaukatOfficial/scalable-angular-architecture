import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { RuntimeConfigLoaderService } from '../../runtime-config-loader';

// why do you need defining window as any?
// check this: https://github.com/aws/aws-amplify/issues/678#issuecomment-389106098
(window as any).global = window;

@Injectable({ providedIn: 'root' })
export class Auth0Service {
  auth0: any;
  accessToken: any;
  expiresAt: any;
  constructor(public router: Router, private configSvc: RuntimeConfigLoaderService) {
    const config = this.configSvc.getConfig();
    this.auth0 = new auth0.WebAuth({
      clientID: `${config.clientID}`,
      domain: `${config.domain}`,
      responseType: `${config.responseType}`,
      redirectUri: `${config.redirectUri}`,
      scope: `${config.scope}`
    });
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err: any, authResult: any) => {
      if (authResult && authResult.accessToken) {
        window.location.hash = '';
        this.accessToken = authResult.accessToken;
        this.expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
        this.router.navigate(['/dashboard']);
      } else if (err) {
        this.router.navigate(['/']);
      }
    });
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    this.accessToken = null;
    this.expiresAt = null;
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    return new Date().getTime() < this.expiresAt;
  }
}
