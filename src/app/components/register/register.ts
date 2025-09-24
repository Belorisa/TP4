import { Component, inject } from '@angular/core';
import { Users } from '../../services/users/users';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  private readonly usersService: Users = inject(Users);

  registerUser( mail: string, password: string, confirmPassword: string) {
    if(password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    this.usersService.registerUser(mail, password);
  }
}
