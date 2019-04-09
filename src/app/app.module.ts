import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoDashboardComponent } from './logo-dashboard/logo-dashboard.component';
import { ChildDashboardComponent } from './child-dashboard/child-dashboard.component';
import { AddChildComponent } from './add-child/add-child.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    LoginPageComponent,
    LogoDashboardComponent,
    ChildDashboardComponent,
    AddChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
