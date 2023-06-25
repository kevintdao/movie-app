import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private serverUrl = environment.server_url;

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private HttpClient: HttpClient) {
    const token = localStorage.getItem('token');
    this._isLoggedIn$.next(!!token);
  }

  login(username: string, password: string) {
    return this.HttpClient.post(`${this.serverUrl}/Auth/login`, {
      email: username,
      password,
    }).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
        this._isLoggedIn$.next(true);
      })
    );
  }

  register() {
    return this.HttpClient.post(`${this.serverUrl}/Auth/register`, {});
  }
}
