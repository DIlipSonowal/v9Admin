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
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule],
    declarations: []
})
export class DashomeRoutingModule { }
