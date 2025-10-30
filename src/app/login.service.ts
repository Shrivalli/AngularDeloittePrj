import { Injectable } from '@angular/core';
import { Login } from '../Models/login';
import { User } from '../Models/user';
import { UserService } from './user.service';

@Injectable(
  {
  providedIn: 'root'
}
)
export class LoginService {
  private loggedIn = false;
  private currentUser: User | null = null;

  constructor(private userService: UserService) {}

  login(credentials: Login): boolean {
    const user = this.userService.getUserByCredentials(credentials.username, credentials.password);
    if (user) {
      this.loggedIn = true;
      this.currentUser = user;
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    this.currentUser = null;
  }

  isUserLoggedIn(): boolean {
    return this.loggedIn;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}