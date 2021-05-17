import { UserService } from './../../services/user.service';
import { ThemeService } from './../../services/theme.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  isDark;
  role;

  constructor(
    private authService: AuthService,
    private themeService: ThemeService,
    private userService: UserService

  ) { }

  ngOnInit() {
    this.isDark = this.themeService.darkMode;
    this.onGetRole();
  }


  onLogout() {
    this.authService.logout();
  }

  toggleDarkMode() {
    this.themeService.toggleAppTheme();
  }

  onGetRole() {
    this.userService.getProfile()
      .subscribe(userData => {
         this.role = userData.user.role
      })
  }

}
