import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthLoginService {
  private username: string = 'admin';
  private password: string = 'test';
  public validLogin: boolean = false;

  constructor(private router: Router, private storage: LocalStorageService) {
    // getUserLoginValidation used to work with a separate service with specific methods for localStore
    storage.getUserLoginValidation('logged') === 'true'
      ? (this.validLogin = true)
      : (this.validLogin = false);
  }

  login(username: string, password: string): void {
    if (username === this.username && password === this.password) {
      this.storage.setUserLoginValidation('logged', 'true');
      this.validLogin = true;
    } else {
      alert('Try with     admin/test ');
      // validLogin still false if login error
    }
  }

  logout(): void {
    this.router.navigate(['/login']);
    this.storage.clear();
    this.validLogin = false;
  }

  isLogged(): boolean {
    return this.validLogin;
  }

  getUsername(): string {
    return this.username;
  }
}
