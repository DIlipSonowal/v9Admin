import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashomeComponent } from './dashome.component';
import { SliderComponent } from '../components/slider/slider.component';
import { GoalsComponent } from '../components/goals/goals.component';
const dashboardRoutes: Routes = [
    {
        path: '', component: DashomeComponent, children: [
          { path: 'slider', component:SliderComponent },
          { path: 'goals', component:GoalsComponent },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule],
    declarations: []
})
export class DashomeRoutingModule { }
