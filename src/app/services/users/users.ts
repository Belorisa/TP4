import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';


interface User {
  id: number;
  mail: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class Users {
  users = signal<User[]>([
    { id: 1, mail: 'test@test.fr', password: 'test' },
    { id: 2, mail: 'test2@test2.fr', password: 'test2' }
  ]);

  initialId = 2
  private router: Router = inject(Router);

  isCorrectUser = computed(() => {
    const storedUser = localStorage.getItem('User');
    if (storedUser) {
      const { mail, password } = JSON.parse(storedUser);
      const user = this.users().find(user => user.mail === mail && user.password === password);
      if (user) {
        sessionStorage.setItem('UserId', user.id.toString());
        return true;
      }
    }
    return false;
  });

  logUser(mail: string, password: string) {
    localStorage.setItem('User', JSON.stringify({ mail, password }));
    if (this.isCorrectUser()) {
      alert("Login successful!");
      this.router.navigate(['/profil/' + sessionStorage.getItem('UserId')]);
      localStorage.clear()
    }
    else {
      alert("Login failed. Please check your credentials.");
      localStorage.clear()
    }
  }

  getUser(id: string | null) {
    const userId = Number(id);
    return this.users().find(user => user.id === userId);
  }

  disconnectUser() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  registerUser(mail: string, password: string) {
    if (mail == "" || password == "") {
      alert("Mail or password cannot be empty.");
      return;
    }
    const newUser: User = { id: this.initialId + 1, mail, password };
    this.users.update(users => [...users, newUser]);
    this.initialId += 1;
  }

}
