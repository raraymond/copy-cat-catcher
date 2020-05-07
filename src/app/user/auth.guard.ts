import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { AngularFireAuth } from '@angular/fire/auth';
import { SnackService } from '../services/snack.service';
import {AuthService} from '../user/services/auth.service';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    // private afAuth: AngularFireAuth,
    private snack: SnackService,
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

      return this.auth.user$.pipe(
        take(1),
        map(user => !!user), // <-- map to boolean
        tap(loggedIn => {
          if (!loggedIn) {
            console.log('access denied')
            this.router.navigate(['/login']);
          }
      })
    )
  }
}

  // async canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Promise<boolean> {

  //   const user = await this.afAuth.currentUser;
  //   const isLoggedIn = !!user;
  //   if (!isLoggedIn) {
  //     this.snack.authError();
  //   }
  //   return isLoggedIn;
  // }

