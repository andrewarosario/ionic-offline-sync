import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private userService: UserService,
    private storage: Storage,
    private router: Router
  ) { }

  login(user: User) {
    this.userService.user.setValue(user);
    this.storage.set('user', user);
    this.router.navigate(['/tabs']);
  }

  logout() {
    this.userService.user.setValue(null);
  }
}
