import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from './reactive-forms/reactive-forms.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildToparentModule } from './child-toparent/child-toparent.module';
import { ParentTochildModule } from './parent-tochild/parent-tochild.module';



@NgModule({
  declarations: [
    AppComponent,
 ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ParentTochildModule,
    ChildToparentModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
