import { AuthService } from './../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }


  onRegister(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.authService.createUser(form.value.firstName, form.value.lastName, form.value.sex, form.value.ages, form.value.email, form.value.password)
  }

}
