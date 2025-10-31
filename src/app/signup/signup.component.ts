import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../Models/user';
import { UserAPIService } from '../user-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, RouterModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user: User = { userId: 0, username: '', password: '', email: '', role: 'user' };
  message = '';
  messageClass = '';

  constructor(private userAPIService: UserAPIService, private router: Router) {}

  onSignup(form: any): void {
    if (form.valid) {
      this.user.userId = Math.floor(Math.random() * 10000) + 1;
      console.log("signup object:",this.user);
      console.log('About to call createUser method');
      this.userAPIService.createUser(this.user).subscribe({
        next: (response) => {
          this.message = 'Signup successful! You can now login.';
          this.messageClass = 'success-message';
          setTimeout(() => this.router.navigate(['/login']), 2000);
        },
        error: (error) => {
          this.message = 'Signup failed. Please try again.';
          this.messageClass = 'error-message';
          console.error('Signup error:', error);
        }
      });
    } else {
      this.message = 'Please fill all required fields correctly.';
      this.messageClass = 'error-message';
    }
  }
}
