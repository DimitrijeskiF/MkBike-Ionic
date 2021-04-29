import { SettingsPage } from './settings/settings.page';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: '/tabs',
        component: SettingsPage,
        children: [
            {
                path: 'settings',
                loadChildren: () => import('../pages/settings/settings.module').then(m => m.SettingsPageModule)
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRouter { }