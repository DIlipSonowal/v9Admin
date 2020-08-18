/*import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CoutryGraphComponent } from '../coutry-graph/coutry-graph.component';
const dashboardRoutes: Routes = [
    {
      path: '', component: HomeComponent, children: [
        {path: '', component: CoutryGraphComponent},
     ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule],
    declarations: [ ]
})
export class HomeRoutingModule { }*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CoutryGraphComponent } from '../coutry-graph/coutry-graph.component';

const dashboardRoutes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: '', component:CoutryGraphComponent },
            { path: 'home', loadChildren:()=>import('../dashome/dashome.module').then(m=> m.DashomeModule)},
            { path: 'about-us', loadChildren:()=>import('../dasabout/dasabout.module').then(m=> m.DasaboutModule)}
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule],
    declarations: []
})
export class HomeRoutingModule { }
