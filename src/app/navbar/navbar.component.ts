import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { TooltipDirective } from '../tooltip.directive';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, TooltipDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public loginService: LoginService, private router: Router) {}

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/']);
  }
}
