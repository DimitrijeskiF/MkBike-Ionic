import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users: any = [];
  img;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.onGetUsers()
  }

  async onGetUsers() {
    this.users = await (await (this.userService.getUsers())).users
  }

  onDeleteUser(userId: string) {
    this.userService.deleteUser(userId)
      .subscribe(() => {
        this.onGetUsers();
      })
  }
}
