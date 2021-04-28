import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BACKEND_URL = environment.uri;

  constructor(
    private http: HttpClient,

  ) { }

  getProfile() {
    return this.http.get<{ user: any }>(this.BACKEND_URL + '/users/me')
  }



  uploadProfilePicture(pic: FormData) {
    return this.http.post(this.BACKEND_URL + '/users/me/image', pic)
      .subscribe(res => { });
  }
}
