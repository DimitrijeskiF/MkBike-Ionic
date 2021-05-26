import { MessagingService } from './services/messaging.service';
import { EventsService } from './services/events.service';
import { ThemeService } from './services/theme.service';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  THEME_KEY = 'toggleDark'

  constructor(
    private authService: AuthService,
    private router: Router,
    private platform: Platform,
    private storage: Storage,
    private themeService: ThemeService,
    private eventsService: EventsService,
    private messagingService: MessagingService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
    this.platform.ready().then(() => {
      this.storage.get(this.THEME_KEY)
        .then(theme => {
          this.themeService.setAppTheme(theme);
        })
    })

    this.onDisplayNotification();
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/tabs'])
    }
  }





  onDisplayNotification() {
    this.messagingService.getMessages()
      .subscribe(async (msg: any) => {
        const alert = await this.alertCtrl.create({
          header: msg.notification.title,
          subHeader: msg.notification.body,
          buttons: ['OK'],
        })
        await alert.present();
      })
  }
}
