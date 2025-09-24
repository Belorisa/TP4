import { Component, inject } from '@angular/core';
import { Users } from '../../services/users/users';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  public readonly usersService: Users = inject(Users);

  login(mail: string, password: string) {
    this.usersService.logUser(mail, password);
  }

}
