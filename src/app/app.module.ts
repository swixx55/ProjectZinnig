import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { RegisterPageComponent } from './register-page/register-page.component';
=======
import { LoginPageComponent } from './login-page/login-page.component';
>>>>>>> 753333462853fa23ae145927602d623211b4e303

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    RegisterPageComponent
=======
    LoginPageComponent
>>>>>>> 753333462853fa23ae145927602d623211b4e303
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
