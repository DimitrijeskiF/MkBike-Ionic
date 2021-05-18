import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenagePage } from './menage.page';

const routes: Routes = [
  {
    path: '',
    component: MenagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenagePageRoutingModule {}
