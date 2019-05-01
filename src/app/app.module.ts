import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

// Routing module for router service
import { AppRoutingModule } from './app-routing.module';

// Components
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoDashboardComponent } from './logo-dashboard/logo-dashboard.component';
import { ChildDashboardComponent } from './child-dashboard/child-dashboard.component';
import { AddChildComponent } from './add-child/add-child.component';
import { AddParentComponent } from './add-parent/add-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    LoginPageComponent,
    LogoDashboardComponent,
    ChildDashboardComponent,
    AddChildComponent,
    AddParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
