import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildToparentRoutingModule } from './child-toparent-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    ChildToparentRoutingModule
  ]
})
export class ChildToparentModule { }
