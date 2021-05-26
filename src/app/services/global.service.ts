import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private altCtrl: AlertController

  ) { }



  async handleErrorMessage(message: string) {
    const alert = await this.altCtrl.create({
      header: 'An Error Occurred!',
      message: message,
      buttons: ['OK']
    })
    await alert.present();
  }

  async handleSuccessMessage(message: string) {
    const alert = await this.altCtrl.create({
      header: 'Success!',
      message: message,
      buttons: ['OK']
    })
    await alert.present();
  }

}
