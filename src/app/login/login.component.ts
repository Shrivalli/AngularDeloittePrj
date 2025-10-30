import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Login } from '../../Models/login';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterModule],
  //providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials: Login = { username: '', password: '' };
  loginMessage = '';

  constructor(private loginService: LoginService, private router: Router) {}

  onLogin(): void {
    if (this.loginService.login(this.credentials)) {
      this.router.navigate(['/']);
    } else {
      this.loginMessage = 'Invalid credentials!';
    }
  }

  onLogout(): void {
    this.loginService.logout();
    this.loginMessage = 'Logged out successfully!';
  }

  isUserLoggedIn(): boolean {
    return this.loginService.isUserLoggedIn();
  }
}
