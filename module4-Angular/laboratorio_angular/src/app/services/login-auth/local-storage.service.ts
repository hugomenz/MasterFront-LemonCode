import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public setUserLoginValidation(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getUserLoginValidation(key: string) {
    return localStorage.getItem(key);
  }

  public removeUserLoginValidation(key: string) {
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }
}
