import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CqSharedModule } from 'cq-shared' // 'projects/cq-shared/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturesModule,
    CqSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
