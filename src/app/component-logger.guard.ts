import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from './login.service';

export const componentLoggerGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  
  console.log('=== COMPONENT LOAD GUARD ===');
  console.log('Component URL:', state.url);
  console.log('Route Data:', route.data);
  
  if (loginService.isUserLoggedIn()) {
    const currentUser = loginService.getCurrentUser();
    console.log('User accessing component:', currentUser?.username);
  } else {
    console.log('Anonymous user accessing component');
  }
  
  console.log('============================');
  
  return true; // Allow access
};