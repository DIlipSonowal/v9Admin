import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashomeRoutingModule } from './dashome-routing.module';
import { DashomeComponent } from './dashome.component';
import { SliderComponent } from '../components/slider/slider.component';
import {SharedModule} from '../shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GoalsComponent } from '../components/goals/goals.component';
import { AboutComponent } from '../components/about/about.component';
import { ChooseUsComponent } from '../components/choose-us/choose-us.component';
import { ServicesComponent } from '../components/services/services.component';
import { WorksComponent } from '../components/works/works.component';
import { TeamsComponent } from '../components/teams/teams.component';
@NgModule({
  declarations: [DashomeComponent,  SliderComponent, GoalsComponent, AboutComponent,
    ChooseUsComponent, ServicesComponent, ServicesComponent, WorksComponent, TeamsComponent],
  imports: [
    FlexLayoutModule,
    CommonModule, RouterModule, FormsModule, ReactiveFormsModule, DashomeRoutingModule,SharedModule
  ],
  exports: [DashomeComponent, SliderComponent, GoalsComponent, AboutComponent,
    ChooseUsComponent, ServicesComponent, ServicesComponent, WorksComponent, TeamsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashomeModule { }
