import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  user: any;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getProfile()
      .subscribe(userData => {
        this.user = userData.user;
      })
  }

}
