import { ButtonComponent } from './button/button.component';
import { SlidesComponent } from './slides/slides.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SlidesComponent,
    ButtonComponent
  ],
  exports:[SlidesComponent, ButtonComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
