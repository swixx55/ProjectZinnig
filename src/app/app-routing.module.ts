import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPageComponent } from './auth/register-page/register-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { LogoDashboardComponent } from './components/logo-dashboard/logo-dashboard.component';
import { ChildDashboardComponent } from './components/child-dashboard/child-dashboard.component';
import { AddChildComponent } from './components/add-child/add-child.component';
import { AddParentComponent } from './components/add-parent/add-parent.component';
import { LogoProfileComponent } from './components/logo-profile/logo-profile.component';
import { AuthGuard } from './gaurds/auth.guard';
import { LevelComponent } from './components/level/level.component';


const routes: Routes = [
  { path: '', redirectTo: '/login-page' , pathMatch: 'full' },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'register-page', component: RegisterPageComponent },
  { path: 'dashboard', component: LogoDashboardComponent, canActivate: [AuthGuard] },
  { path: 'child/:id', component: ChildDashboardComponent, canActivate: [AuthGuard] },
  { path: 'add', component: AddChildComponent, canActivate: [AuthGuard] },
  { path: 'child/add-parent/:id' , component: AddParentComponent, canActivate: [AuthGuard] },
  { path: 'logo-profile' , component: LogoProfileComponent, canActivate: [AuthGuard]},
  { path: 'level/:id', component: LevelComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
