import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { tap } from 'rxjs/operators'
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  token = null;
  BACKEND_URL = environment.uri;

  constructor(
    private afMessaging: AngularFireMessaging,
    private http: HttpClient
  ) { }

  requestPermission() {
    return this.afMessaging.requestToken.pipe(
      tap(token => {
        console.log('Store token to server: ', token);
        this.createToken(token)
      })
    );
  }


  createToken(fcmToken: string) {
    const token = {
      fcmToken: fcmToken
    }
    this.http.post(this.BACKEND_URL + '/fcmTokens', token).subscribe()
  }
}
