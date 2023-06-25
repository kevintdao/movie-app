import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { User } from './types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private serverUrl = environment.server_url;

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private _user$ = new BehaviorSubject<User | null>(null);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  user$ = this._user$.asObservable();

  constructor(private HttpClient: HttpClient) {
    const user = localStorage.getItem('user');
    this._isLoggedIn$.next(!!user);
    this._user$.next(user ? JSON.parse(user) : null);
  }

  login(username: string, password: string) {
    return this.HttpClient.post(`${this.serverUrl}/Auth/login`, {
      username,
      password,
    }).pipe(
      tap((response: any) => {
        localStorage.setItem('user', JSON.stringify(response));
        this._isLoggedIn$.next(true);
        this._user$.next(response);
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
    this._isLoggedIn$.next(false);
    this._user$.next(null);
  }

  register(username: string, password: string, confirmPassword: string) {
    return this.HttpClient.post(`${this.serverUrl}/Auth/register`, {
      username,
      password,
      confirmPassword,
    });
  }
}
