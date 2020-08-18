import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DasaboutRoutingModule } from './dasabout-routing.module';

import { DasaboutComponent } from './dasabout.component';


@NgModule({
  declarations: [DasaboutComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule, DasaboutRoutingModule
  ],
  exports: [DasaboutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DasaboutModule { }
