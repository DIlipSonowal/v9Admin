import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashomeComponent } from './dashome.component';
import { SliderComponent } from '../components/slider/slider.component';
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
const dashboardRoutes: Routes = [
    {
        path: '', component: DashomeComponent, children: [
          { path: 'slider', component:SliderComponent },
          { path: 'goals', component:GoalsComponent },
          { path: 'about', component:AboutComponent },
          { path: 'choose-us', component:ChooseUsComponent },
          { path: 'services', component:ServicesComponent },
          { path: 'works', component:WorksComponent },
          { path: 'teams', component:TeamsComponent },
          { path: 'feedback', component:FeedbackComponent },
          { path: 'why-us', component:WhyV9Component },
          { path: 'mission', component:MissionComponent },
          { path: 'vission', component:VissionComponent },
          { path: 'our-values', component:OurValuesComponent },
          { path: 'ceo', component:CeoComponent },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule],
    declarations: []
})
export class DashomeRoutingModule { }
