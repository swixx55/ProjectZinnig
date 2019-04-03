import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {path: 'register-page', component: RegisterPageComponent}
=======
import {LoginPageComponent} from './login-page/login-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/login-page' , pathMatch: 'full'},
  {path: 'login-page', component: LoginPageComponent}
>>>>>>> 753333462853fa23ae145927602d623211b4e303
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
