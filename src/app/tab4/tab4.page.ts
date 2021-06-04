import { environment } from './../../environments/environment';
import { UserService } from './../services/user.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  user: any;
  img: any;
  image: any

  url = environment.uri;

  constructor(
    private userService: UserService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.onGetProfile()
  }

  onGetProfile() {
    this.userService.getProfile()
      .subscribe(userData => {
        console.log(userData);

        if (userData.user.image === undefined) {
          this.user = userData.user;
          this.img = undefined;
        } else {
          this.user = userData.user;
          this.img = this.url + '/' + userData.user.image;
        }
      })
  }

  onFileSelected(event: any) {
    this.image = event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('file', this.image, this.image.name);
    this.userService.uploadProfilePicture(fd);
    this.onGetProfile();
    window.location.reload();
  }
}
