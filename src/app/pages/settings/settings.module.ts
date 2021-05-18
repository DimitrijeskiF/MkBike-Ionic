import { UsersPageRoutingModule } from '../users/users-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    SettingsPageRoutingModule,
    UsersPageRoutingModule
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule { }
