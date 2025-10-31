import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoginService } from './login.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const loginService = inject(LoginService);
  
  console.log('=== HTTP INTERCEPTOR ===');
  console.log('Request URL:', req.url);
  console.log('Request Method:', req.method);
  
  // Check if JWT token exists
  const authHeader = req.headers.get('Authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    console.log('JWT Token found in request');
    console.log('Token:', authHeader.substring(0, 20) + '...');
  } else {
    console.log('No JWT Token found in request');
  }
  
  // Log current user if logged in
  if (loginService.isUserLoggedIn()) {
    const currentUser = loginService.getCurrentUser();
    console.log('Current logged in user:', currentUser?.username);
  } else {
    console.log('No user currently logged in');
  }
  
  console.log('========================');
  
  return next(req);
};