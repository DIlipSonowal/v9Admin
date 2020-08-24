import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';
import { TaskComponent } from './task/task.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import {AddProjectsComponent} from './add-projects/add-projects.component';
const dashboardRoutes: Routes = [
    {
        path: '', component: AdminPanelComponent, children: [
          { path: 'admin', component:AdminHomeComponent },
          { path: 'task', component:TaskComponent },
          { path: 'users', component:UsersComponent },
          { path: 'projects', component:ProjectsComponent },
          { path: 'add-projects', component:AddProjectsComponent },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule],
    declarations: []
})
export class AdminPanelRoutingModule { }
