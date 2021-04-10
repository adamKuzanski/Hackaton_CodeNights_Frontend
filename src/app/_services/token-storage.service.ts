import { Injectable } from '@angular/core';
import {UserModel} from '../_models/UserModel';
import {Router} from '@angular/router';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private router: Router) { }

  signOut(): void {
    window.sessionStorage.clear();
    this.router.navigate(['/']);
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: UserModel): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): UserModel {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
}
