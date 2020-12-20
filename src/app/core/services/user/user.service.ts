import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { State } from 'src/app/shared/classes/state';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user = new State<User>();

  constructor() { }

}
