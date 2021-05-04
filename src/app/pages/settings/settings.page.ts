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

  constructor(
    private authService: AuthService,
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    this.isDark = this.themeService.darkMode;
  }


  onLogout() {
    this.authService.logout();
  }

  toggleDarkMode() {
   this.themeService.toggleAppTheme();
  }

}
