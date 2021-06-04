import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BACKEND_URL = environment.uri;
  id;

  constructor(
    private http: HttpClient,

  ) { }

  getProfile() {
    return this.http.get<{ user: any }>(this.BACKEND_URL + '/users/me')
  }

  getUserId(){
    this.http.get<{ user: any }>(this.BACKEND_URL + '/users/me').subscribe(userData => {
      this.id = userData.user._id
    })
  }


  uploadProfilePicture(pic: FormData) {
    return this.http.put(this.BACKEND_URL + '/users/'+ this.id+ '/photo', pic)
      .subscribe(res => { });
  }

  /*Admin Functions*/

  getUsers() {
    return this.http.get<{ users: any }>(this.BACKEND_URL + '/admin')
      .pipe(
        map((userData) => {
          return {
            users: userData.users.map(user => {
              return {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                email: user.email,
              }
            })
          }
        })
      ).toPromise();
  }

  deleteUser(userId: string) {
    return this.http.delete(this.BACKEND_URL + `/admin/${userId}`)
  }

}
