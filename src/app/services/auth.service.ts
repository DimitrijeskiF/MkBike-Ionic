import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http'
import { AuthData } from '../models/auth-data';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlertController, Platform } from '@ionic/angular';
import { tap } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public helper: JwtHelperService = new JwtHelperService();
  TOKEN_KEY = 'access_token';
  BACKEND_URL = environment.uri;
  user = null;
  authenticationState = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    private alertController: AlertController
  ) {
    this.platform.ready()
      .then(() => {
        this.checkToken();
      })
  }

  checkToken() {
    this.storage.get(this.TOKEN_KEY).then(token => {
      let decoded = this.helper.decodeToken(token);
      let isExpired = this.helper.isTokenExpired(token);
      console.log('Is expired: ' + isExpired);


      if (!isExpired) {
        this.user = decoded;
        this.authenticationState.next(true);
        this.router.navigate(['/tabs'])
      } else {
        this.storage.remove(this.TOKEN_KEY);
      }
    })
  }



  createUser(firstName: string, lastName: string, sex: string, ages: number, email: string, password: string) {
    const authData: AuthData = {
      firstName: firstName,
      lastName: lastName,
      sex: sex,
      ages: ages,
      email: email,
      password: password
    }

    this.http.post<{ token: string, error: any }>(this.BACKEND_URL + "/users", authData)
      .subscribe(response => {
        this.router.navigate(["/login"]);
      })
  }


  login(email: string, password: string) {
    const authData = {
      email: email,
      password: password
    }


    return this.http.post<{ token: string, expiresIn: number, error: any }>(this.BACKEND_URL + "/login", authData)
      .pipe(
        tap((res) => {
          this.storage.set(this.TOKEN_KEY, res['token']);
          this.user = this.helper.decodeToken(res['token'])
          this.authenticationState.next(true);
          this.router.navigate(['/tabs'])
        })
      )
  }


  logout() {
    this.storage.remove(this.TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });

    this.router.navigate(['/login'])
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }



  
}