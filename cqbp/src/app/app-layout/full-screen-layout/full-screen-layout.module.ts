import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullScreenLayoutRoutingModule } from './full-screen-layout-routing.module';
import { FullScreenLayoutComponent } from './full-screen-layout.component';
import { CqSharedModule } from 'cq-shared' // 'projects/cq-shared/src/public-api';
@NgModule({
  declarations: [
    FullScreenLayoutComponent
  ],
  imports: [
    CommonModule,
    FullScreenLayoutRoutingModule,
    CqSharedModule
  ]
})
export class FullScreenLayoutModule { }
