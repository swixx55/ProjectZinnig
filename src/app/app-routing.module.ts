import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoDashboardComponent } from './logo-dashboard/logo-dashboard.component';
import { ChildDashboardComponent } from './child-dashboard/child-dashboard.component';
import { AddChildComponent } from './add-child/add-child.component';
import { AddParentComponent } from './add-parent/add-parent.component';
import { AuthGuard } from './gaurds/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login-page' , pathMatch: 'full' },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'register-page', component: RegisterPageComponent },
  { path: 'dashboard', component: LogoDashboardComponent, canActivate: [AuthGuard] },
  { path: 'child/:id', component: ChildDashboardComponent, canActivate: [AuthGuard] },
  { path: 'add', component: AddChildComponent, canActivate: [AuthGuard] },
  { path: 'child/add-parent/:id' , component: AddParentComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
