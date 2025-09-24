import { Component, inject } from '@angular/core';
import { Users } from '../../services/users/users';

@Component({
  selector: 'app-profil',
  imports: [],
  templateUrl: './profil.html',
  styleUrl: './profil.css'
})
export class Profil {

  session = sessionStorage;
  UserID = this.session.getItem('UserId');

  private readonly usersService: Users = inject(Users);

  user = this.usersService.getUser(this.UserID)

  disconnect() {
    this.usersService.disconnectUser();
  }
}
