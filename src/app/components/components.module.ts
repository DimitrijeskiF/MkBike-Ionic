import { EventsComponent } from './events/events.component';
import { FormsModule } from '@angular/forms';
import { AddPointComponent } from './add-point/add-point.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { AddEventComponent } from './add-event/add-event.component';
import { RetireeComponent } from './retiree/retiree.component';
import { WrokerComponent } from './wroker/wroker.component';
import { YoungComponent } from './young/young.component';
import { ButtonComponent } from './button/button.component';
import { SlidesComponent } from './slides/slides.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    SlidesComponent,
    ButtonComponent,
    YoungComponent,
    WrokerComponent,
    RetireeComponent,
    AddEventComponent,
    AddNewsComponent,
    AddPointComponent,
  ],
  exports: [
    SlidesComponent,
    ButtonComponent,
    YoungComponent,
    WrokerComponent,
    RetireeComponent,
    AddEventComponent,
    AddNewsComponent,
    AddPointComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class ComponentsModule { }
