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
import { FeedbackComponent } from '../components/feedback/feedback.component';
import { WhyV9Component } from '../components/about/why-v9/why-v9.component';
import { MissionComponent } from '../components/about/mission/mission.component';
import { VissionComponent } from '../components/about/vission/vission.component';
import { OurValuesComponent } from '../components/our-values/our-values.component';
import {CeoComponent} from '../components/ceo/ceo.component';
@NgModule({
  declarations: [DashomeComponent,  SliderComponent, GoalsComponent, AboutComponent,
    ChooseUsComponent, ServicesComponent, ServicesComponent, WorksComponent, TeamsComponent,
     FeedbackComponent, WhyV9Component, MissionComponent, VissionComponent, OurValuesComponent, CeoComponent],
  imports: [
    FlexLayoutModule,
    CommonModule, RouterModule, FormsModule, ReactiveFormsModule, DashomeRoutingModule,
    SharedModule
  ],
  exports: [DashomeComponent, SliderComponent, GoalsComponent, AboutComponent,WhyV9Component,
    ChooseUsComponent, ServicesComponent, ServicesComponent, WorksComponent, TeamsComponent,
    FeedbackComponent, MissionComponent, VissionComponent, OurValuesComponent, CeoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashomeModule { }
