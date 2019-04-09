import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoDashboardComponent } from './logo-dashboard/logo-dashboard.component';
import { ChildDashboardComponent } from './child-dashboard/child-dashboard.component';
import { AddChildComponent } from './add-child/add-child.component';


const routes: Routes = [
  {path: '', redirectTo: '/login-page' , pathMatch: 'full'},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'register-page', component: RegisterPageComponent},
  {path: 'dashboard', component: LogoDashboardComponent},
  {path: 'child', component: ChildDashboardComponent},
  {path: 'add', component: AddChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
