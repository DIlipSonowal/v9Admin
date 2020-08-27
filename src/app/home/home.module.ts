import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HomeComponent } from './home.component';
import { CardComponent } from '../card/card.component';
import { CoutryGraphComponent } from '../coutry-graph/coutry-graph.component';
import {SharedModule} from '../shared.module';
import {HomeRoutingModule } from './home-routing.module';
import {RouterModule} from '@angular/router';
import {DashomeModule} from '../dashome/dashome.module';
import {DasaboutModule} from '../dasabout/dasabout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {UploadDirective} from '../directives/upload.directive';
import { MainComponent } from '../main/main.component';

@NgModule({
  declarations: [HomeComponent, CardComponent,
    CoutryGraphComponent, UploadDirective, MainComponent,
    ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    RouterModule,
    DashomeModule,
    DasaboutModule,
    FlexLayoutModule
  ],
  exports: [HomeComponent, CardComponent,
    CoutryGraphComponent, MainComponent]
})
export class HomeModule { }
