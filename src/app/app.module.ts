import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
    AppRoutingModule,
    ParentTochildModule,
    ChildToparentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
