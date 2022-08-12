import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';
import { ReactiveFromsComponent } from './reactive-froms/reactive-froms.component';
import { FormsComponent } from './forms/forms.component';


@NgModule({
  declarations: [ReactiveFromsComponent, FormsComponent],
  imports: [
    CommonModule,
    ReactiveFormsRoutingModule
  ]
})
export class ReactiveFormsModule { }
