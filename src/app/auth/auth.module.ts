import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

// Forms Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// // Routing module for router service
import { AppRoutingModule } from './../app-routing.module';

@NgModule({
  declarations: [
    RegisterPageComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    RegisterPageComponent,
    LoginPageComponent
  ]
})
export class AuthModule { }
