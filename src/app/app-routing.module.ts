import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';
import {LoginPageComponent} from './login-page/login-page.component';


const routes: Routes = [
  {path: '', redirectTo: '/login-page' , pathMatch: 'full'},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'register-page', component: RegisterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
