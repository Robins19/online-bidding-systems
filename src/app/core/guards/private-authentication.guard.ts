
import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class PrivateAuthenticationGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        var isUserData = localStorage.getItem('userData');
        if (isUserData) {
            return true;
        } else {
            if (!isUserData) {
                this.router.navigate(['']);
            }
            return false;
        }
    }
}


