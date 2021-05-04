import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  darkMode = false;
  THEME_KEY = 'toggleDark'
  constructor(
    private platform: Platform,
    private storage: Storage
  ) {

    //when platform is ready
    this.platform.ready().then(() => {
      this.storage.get(this.THEME_KEY)
        .then(theme => {
          this.setAppTheme(theme);
        })
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.setAppTheme(prefersDark.matches);
    })
  }

  toggleAppTheme() {
    this.darkMode = !this.darkMode;
    this.setAppTheme(this.darkMode);
  }

  setAppTheme(dark) {
    //setting the  theme
    this.darkMode = dark;
    if (this.darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }

    this.storage.set(this.THEME_KEY, this.darkMode);
  }
}
