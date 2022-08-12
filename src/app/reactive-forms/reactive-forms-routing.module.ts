import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFromsComponent } from './reactive-froms/reactive-froms.component';

const routes: Routes = [
  {
    path: 'child',
    component:FormsComponent,
    pathMatch: 'full'
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveFormsRoutingModule {}
