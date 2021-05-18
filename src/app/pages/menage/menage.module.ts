import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenagePageRoutingModule } from './menage-routing.module';

import { MenagePage } from './menage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenagePageRoutingModule,
    ComponentsModule,
    FormsModule
  ],
  declarations: [MenagePage]
})
export class MenagePageModule {}
