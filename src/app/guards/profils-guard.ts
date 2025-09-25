import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Users } from '../services/users/users';

export const profilsGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const authService = inject(Users)

  if (authService.isCorrectUser()) return true;
  else {
    router.navigate(['/home'])
    return false;
  }
};
