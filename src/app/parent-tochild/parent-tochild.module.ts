import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentTochildRoutingModule } from './parent-tochild-routing.module';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [CommonModule, ParentTochildRoutingModule],
})
export class ParentTochildModule {}
