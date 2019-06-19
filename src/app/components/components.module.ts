import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { AddChildComponent } from './add-child/add-child.component';
import { AddParentComponent } from './add-parent/add-parent.component';
import { LogoDashboardComponent } from './logo-dashboard/logo-dashboard.component';
import { ChildDashboardComponent } from './child-dashboard/child-dashboard.component';
import { ModalComponent } from './modal/modal.component';
import { LogoProfileComponent } from './logo-profile/logo-profile.component';
import { LevelComponent } from './level/level.component';

// Forms Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// // Routing module for router service
import { AppRoutingModule } from './../app-routing.module';

@NgModule({
  declarations: [
    AlertComponent,
    AddChildComponent,
    AddParentComponent,
    LogoDashboardComponent,
    ChildDashboardComponent,
    ModalComponent,
    LogoProfileComponent,
    LevelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    AddChildComponent,
    AddParentComponent,
    LogoDashboardComponent,
    ChildDashboardComponent
  ]
})
export class ComponentsModule { }
