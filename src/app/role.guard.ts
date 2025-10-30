import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { LoginService } from './login.service';

export const roleGuard = (allowedRoles: string[]): CanMatchFn => {
  return (route, segments) => {
    const loginService = inject(LoginService);
    const router = inject(Router);
    
    if (!loginService.isUserLoggedIn()) {
      router.navigate(['/login']);
      return false;
    }
    
    const currentUser = loginService.getCurrentUser();
    if (currentUser && allowedRoles.includes(currentUser.role)) {
      return true;
    }
    
    router.navigate(['/']);
    return false;
  };
};
