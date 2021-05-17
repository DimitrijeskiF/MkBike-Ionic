import { map } from 'rxjs/operators';
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

  /*Admin Functions*/

  getUsers() {
   return this.http.get<{ users: any }>(this.BACKEND_URL + '/admin')
      .pipe(
        map((userData) => {
          return {
            users: userData.users.map(user => {
              return{
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
