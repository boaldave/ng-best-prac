import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { AppLayoutComponent } from './app-layout.component';
import { HeaderFooterSidebarsLayoutComponent } from './header-footer-sidebars-layout/header-footer-sidebars-layout.component';
import { HeaderFooterSidebarsLayoutModule } from './header-footer-sidebars-layout/header-footer-sidebars-layout.module';
import { FullScreenLayoutModule } from './full-screen-layout/full-screen-layout.module';


@NgModule({
  declarations: [
    AppLayoutComponent
  ],
  imports: [
    CommonModule,
    AppLayoutRoutingModule,
    HeaderFooterSidebarsLayoutModule,
    FullScreenLayoutModule
  ]
})
export class AppLayoutModule { }
