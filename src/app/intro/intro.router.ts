import { IntroPage } from './intro.page';
import { Router, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: '',
        component: IntroPage,
        children: [
            {
                path: '',
                loadChildren: () => import('../pages/welcome/welcome.module').then(m => m.WelcomePageModule)
            },
            {
                path: 'login',
                loadChildren: () => import('../pages/login/login.module').then(m =>  m.LoginPageModule)
            },
            {
                path: 'signup',
                loadChildren: () => import('../pages/signup/signup.module').then(m => m.SignupPageModule)
            }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class IntroRouter {}