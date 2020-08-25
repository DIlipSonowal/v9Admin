import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
import { LoginComponent} from './login/login.component';
const routes: Routes = [
  {
    path: 'dashboard', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'admin', loadChildren: () => import('./admin-panel/admin-panel.module').then(m => m.AdminPanelModule)
  },
  { path: '', redirectTo: 'login' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
