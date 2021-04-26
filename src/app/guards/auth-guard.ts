import { AuthService } from './../services/auth.service';
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Router } from '@angular/router'


@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor(
        private auth: AuthService,
        private router: Router
    ) { }

    canActivate(): boolean {
        const isAuth = this.auth.isAuthenticated();

        if (!isAuth) {
            this.router.navigate(['/login'])
        }


        return isAuth;
    }
}