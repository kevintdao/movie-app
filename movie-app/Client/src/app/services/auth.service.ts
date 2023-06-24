import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private serverUrl = environment.server_url;

  constructor(private HttpClient: HttpClient) {}

  login(username: string, password: string) {
    return this.HttpClient.post(`${this.serverUrl}/Auth/login`, {
      email: username,
      password,
    });
  }

  register() {
    return this.HttpClient.post(`${this.serverUrl}/Auth/register`, {});
  }
}
