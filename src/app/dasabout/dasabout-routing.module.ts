import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DasaboutComponent } from './dasabout.component';

const dashboardRoutes: Routes = [
    {
        path: '', component: DasaboutComponent, children: [
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule],
    declarations: []
})
export class DasaboutRoutingModule { }
