import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashomeRoutingModule } from './dashome-routing.module';
import { DashomeComponent } from './dashome.component';
import { SliderComponent } from '../components/slider/slider.component';
import {SharedModule} from '../shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [DashomeComponent,  SliderComponent,],
  imports: [
    FlexLayoutModule,
    CommonModule, RouterModule, FormsModule, ReactiveFormsModule, DashomeRoutingModule,SharedModule
  ],
  exports: [DashomeComponent, SliderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashomeModule { }
