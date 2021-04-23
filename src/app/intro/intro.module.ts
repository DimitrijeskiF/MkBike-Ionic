import { IonicStorageModule } from '@ionic/storage';
import { IntroRouter } from './intro.router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { IntroPageRoutingModule } from './intro-routing.module';

import { IntroPage } from './intro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroRouter,
    ReactiveFormsModule,
  ],
  declarations: [IntroPage]
})
export class IntroPageModule {}