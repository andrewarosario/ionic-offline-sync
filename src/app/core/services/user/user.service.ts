import { Injectable } from '@angular/core';
import { State } from 'src/app/shared/classes/state';
import { User } from '../../models/user';
import { Storage } from '@ionic/storage';
import { from, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user = new State<User>();

  constructor(
    private storage: Storage
  ) { }

  public isLogged$(): Observable<boolean> {
    return from(this.storage.get('user')).pipe(
      tap(user => user ? this.user.setValue(user) : null),
      map(user => !!user)
    );
  }

}
