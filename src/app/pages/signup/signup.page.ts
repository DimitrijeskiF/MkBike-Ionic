import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    public authService: AuthService,
    private globalService: GlobalService,
    private router: Router,
    private altCtrl: AlertController
  ) { }

  ngOnInit() {
  }


  onRegister(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log(form.value);


    this.authService.createUser(form.value.firstName, form.value.lastName, form.value.sex, form.value.ages, form.value.email, form.value.password).subscribe(async (response) => {
      await this.globalService.handleSuccessMessage(response.message)
      this.router.navigate(["/login"]);
    }, async (error) => {
      await this.globalService.handleErrorMessage(error.error.message);
    });
  }

}
