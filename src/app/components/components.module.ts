import { RetireeComponent } from './retiree/retiree.component';
import { WrokerComponent } from './wroker/wroker.component';
import { YoungComponent } from './young/young.component';
import { ButtonComponent } from './button/button.component';
import { SlidesComponent } from './slides/slides.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SlidesComponent,
    ButtonComponent,
    YoungComponent,
    WrokerComponent,
    RetireeComponent
  ],
  exports: [SlidesComponent, ButtonComponent, YoungComponent,
    WrokerComponent,
    RetireeComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
