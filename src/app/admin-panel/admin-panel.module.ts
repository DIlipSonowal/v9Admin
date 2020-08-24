import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import {SharedModule} from '../shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AdminPanelComponent} from './admin-panel.component';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { TaskComponent } from './task/task.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UsersComponent } from './users/users.component';
import {ControlMessagesComponent} from './control.message.component';
import { ValidationService } from './services/validator.service';
import { ProjectsComponent } from './projects/projects.component';
import { AddProjectsComponent } from './add-projects/add-projects.component';
@NgModule({
  declarations: [AdminPanelComponent, AdminHomeComponent, TaskComponent, UsersComponent, ControlMessagesComponent, ProjectsComponent, AddProjectsComponent],
  imports: [
    FlexLayoutModule,CKEditorModule,
    CommonModule, RouterModule, FormsModule, ReactiveFormsModule, AdminPanelRoutingModule,SharedModule
  ],
  providers:[ValidationService],
  exports: [AdminPanelComponent, AdminHomeComponent, TaskComponent, AddProjectsComponent, ProjectsComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminPanelModule { }
