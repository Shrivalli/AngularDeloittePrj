import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoginService } from './login.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const loginService = inject(LoginService);
  
  console.log('=== HTTP REQUEST INTERCEPTOR ===');
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
  
  console.log('================================');
  
  // Handle both request and response
  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        console.log('=== HTTP RESPONSE INTERCEPTOR ===');
        console.log('Response Status:', event.status);
        console.log('Response URL:', event.url);
        console.log('Response Body:', event.body);
        console.log('=================================');
      }
    }),
    catchError(error => {
      console.log('=== HTTP ERROR INTERCEPTOR ===');
      console.log('Error Status:', error.status);
      console.log('Error Message:', error.message);
      console.log('Error URL:', error.url);
      
      // Custom error handling based on status codes
      let customError;
      
      switch (error.status) {
        case 401:
          customError = {
            ...error,
            message: 'Authentication failed. Please login again.',
            userFriendlyMessage: 'Your session has expired. Please log in again.'
          };
          // Could redirect to login page here
          console.log('Custom 401 Error: Session expired');
          break;
          
        case 403:
          customError = {
            ...error,
            message: 'Access denied. Insufficient permissions.',
            userFriendlyMessage: 'You do not have permission to access this resource.'
          };
          console.log('Custom 403 Error: Access denied');
          break;
          
        case 404:
          customError = {
            ...error,
            message: 'Resource not found.',
            userFriendlyMessage: 'The requested resource was not found.'
          };
          console.log('Custom 404 Error: Resource not found');
          break;
          
        case 500:
          customError = {
            ...error,
            message: 'Internal server error.',
            userFriendlyMessage: 'Something went wrong on our end. Please try again later.'
          };
          console.log('Custom 500 Error: Server error');
          break;
          
        default:
          customError = {
            ...error,
            message: 'An unexpected error occurred.',
            userFriendlyMessage: 'Something went wrong. Please try again.'
          };
          console.log('Custom Default Error: Unexpected error');
      }
      
      console.log('Custom Error Message:', customError.userFriendlyMessage);
      console.log('==============================');
      
      return throwError(() => customError);
    })
  );
};