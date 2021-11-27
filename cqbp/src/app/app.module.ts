import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CqSharedModule } from 'projects/cq-shared/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CqSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
